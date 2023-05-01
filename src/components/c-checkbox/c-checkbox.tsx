import { computed, defineComponent, PropType } from 'vue';
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
    const isChecked = computed(
      () =>
        props.defaultChecked ||
        (Array.isArray(props.modelValue)
          ? props.modelValue.includes(props.value)
          : props.modelValue),
    );
    const baseClass = useCheckboxStyles();
    const containerClasses = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.color}`,
      `${baseClass.value}--${props.size}`,
    ]);
    const inputClasses = computed(() => [`${baseClass.value}__input`]);

    const handleInput = (event: Event) => {
      if (Array.isArray(props.modelValue)) {
        const index = props.modelValue.indexOf(props.value);
        if (
          (event.currentTarget as HTMLInputElement)?.checked &&
          index === -1
        ) {
          emit('update:modelValue', [...props.modelValue, props.value]);
        } else if (
          !(event.currentTarget as HTMLInputElement)?.checked &&
          index !== -1
        ) {
          emit('update:modelValue', [
            ...props.modelValue.slice(0, index),
            ...props.modelValue.slice(index + 1),
          ]);
        }
      } else {
        emit(
          'update:modelValue',
          (event.currentTarget as HTMLInputElement)?.checked,
        );
      }
      emit('input', (event.currentTarget as HTMLInputElement)?.checked);
      emit('change', (event.currentTarget as HTMLInputElement)?.checked);
    };

    return () => (
      <celeste.div class={containerClasses.value}>
        <input
          class={inputClasses.value}
          type="checkbox"
          checked={isChecked.value}
          onInput={handleInput}
          disabled={props.disabled}
          id={props.id}
        />
        {props.label && (
          <celeste.label class={`${baseClass.value}__label`} for={props.id}>
            {props.label}
          </celeste.label>
        )}
      </celeste.div>
    );
  },
});
