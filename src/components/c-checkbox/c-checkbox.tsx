import { computed, defineComponent, PropType, ref } from 'vue';
import merge from 'lodash/merge';
import { celeste, HTMLCelesteProps } from '@/celeste';
import { Assign } from '@/types';
import { useCheckboxStyles } from './c-checkbox.styles';

export type CCheckboxProps = Assign<
  HTMLCelesteProps<'div'>,
  {
    color?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    label?: string;
    modelValue?: (string | number)[] | boolean;
    size?: 'small' | 'medium' | 'large';
    value?: string | number;
  }
>;

const defaultProps = {
  color: 'primary',
  size: 'medium',
};

export const CCheckbox = defineComponent({
  name: 'CCheckbox',
  props: {
    modelValue: {
      type: [Array, Boolean] as PropType<CCheckboxProps['modelValue']>,
      default: undefined,
    },
    color: String as PropType<CCheckboxProps['color']>,
    size: String as PropType<CCheckboxProps['size']>,
    value: [String, Number] as PropType<CCheckboxProps['value']>,
    label: String as PropType<CCheckboxProps['label']>,
    disabled: Boolean as PropType<CCheckboxProps['disabled']>,
    defaultChecked: Boolean as PropType<CCheckboxProps['defaultChecked']>,
    id: String as PropType<CCheckboxProps['id']>,
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(_props, { emit, attrs }) {
    const props = computed(() => merge({}, defaultProps, _props, attrs));
    const internalChecked = ref(props.value.defaultChecked);

    const isChecked = computed(() => {
      if (props.value.modelValue !== undefined) {
        if (Array.isArray(props.value.modelValue)) {
          return (
            props.value.value !== undefined &&
            props.value.modelValue.includes(props.value.value)
          );
        }
        return props.value.modelValue;
      }
      return internalChecked.value;
    });

    const baseClass = useCheckboxStyles();
    const containerClasses = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.value.color}`,
      `${baseClass.value}--${props.value.size}`,
    ]);
    const inputClasses = computed(() => [`${baseClass.value}__input`]);

    const handleInput = () => {
      const newCheckedState = !isChecked.value;
      if (
        Array.isArray(props.value.modelValue) &&
        props.value.value !== undefined
      ) {
        const index = props.value.modelValue.indexOf(props.value.value);
        if (newCheckedState && index === -1) {
          emit('update:modelValue', [
            ...props.value.modelValue,
            props.value.value,
          ]);
        } else if (!newCheckedState && index !== -1) {
          emit('update:modelValue', [
            ...props.value.modelValue.slice(0, index),
            ...props.value.modelValue.slice(index + 1),
          ]);
        }
      } else {
        emit('update:modelValue', newCheckedState);
      }
      emit('input', newCheckedState);
      emit('change', newCheckedState);
      internalChecked.value = newCheckedState;
    };

    const handleClick = (event: Event) => {
      if (props.value.disabled) {
        event.stopPropagation();
        return;
      }
      handleInput();
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        props.value.disabled ||
        !(event.key === 'Enter' || event.key === ' ')
      ) {
        event.stopPropagation();
        return;
      }
      handleInput();
    };

    return () => (
      <celeste.div class={containerClasses.value}>
        <celeste.div
          class={inputClasses.value}
          role="checkbox"
          onClick={handleClick}
          onKeypress={handleKeyPress}
          tabindex={props.value.disabled ? -1 : 0}
          aria-disabled={props.value.disabled}
          aria-checked={isChecked.value}
          aria-labelledby={props.value.id}
          {...attrs}
        />
        {props.value.label && (
          <celeste.label
            class={`${baseClass.value}__label`}
            id={props.value.id}
          >
            {props.value.label}
          </celeste.label>
        )}
      </celeste.div>
    );
  },
});
