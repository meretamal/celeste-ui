import { computed, defineComponent, PropType, ref } from 'vue';
import { celeste } from '@/celeste';
import { useCheckboxStyles } from './c-checkbox.styles';

export const CCheckbox = defineComponent({
  name: 'CCheckbox',
  props: {
    modelValue: {
      type: [Array, Boolean],
      default: () => [],
    },
    color: {
      type: String as PropType<
        'primary' | 'success' | 'info' | 'warning' | 'danger'
      >,
      default: 'primary',
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    value: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
    },
    defaultChecked: {
      type: Boolean,
    },
    id: {
      type: String,
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { emit }) {
    const internalChecked = ref(props.defaultChecked);

    const isChecked = computed(() => {
      if (Array.isArray(props.modelValue)) {
        return props.modelValue.length > 0
          ? props.modelValue.includes(props.value)
          : internalChecked.value;
      }
      return props.modelValue;
    });

    const baseClass = useCheckboxStyles();
    const containerClasses = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.color}`,
      `${baseClass.value}--${props.size}`,
    ]);
    const inputClasses = computed(() => [`${baseClass.value}__input`]);

    const handleInput = () => {
      const newCheckedState = !isChecked.value;
      if (Array.isArray(props.modelValue)) {
        const index = props.modelValue.indexOf(props.value);
        if (newCheckedState && index === -1) {
          emit('update:modelValue', [...props.modelValue, props.value]);
        } else if (!newCheckedState && index !== -1) {
          emit('update:modelValue', [
            ...props.modelValue.slice(0, index),
            ...props.modelValue.slice(index + 1),
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
      if (props.disabled) {
        event.stopPropagation();
        return;
      }
      handleInput();
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (props.disabled || !(event.key === 'Enter' || event.key === ' ')) {
        event.stopPropagation();
        return;
      }
      handleInput();
    };

    return () => (
      <celeste.div class={containerClasses.value}>
        <div
          class={inputClasses.value}
          role="checkbox"
          onClick={handleClick}
          onKeypress={handleKeyPress}
          tabindex={props.disabled ? -1 : 0}
          aria-disabled={props.disabled}
          aria-checked={isChecked.value}
          aria-labelledby={props.id}
        />
        {props.label && (
          <celeste.label class={`${baseClass.value}__label`} id={props.id}>
            {props.label}
          </celeste.label>
        )}
      </celeste.div>
    );
  },
});
