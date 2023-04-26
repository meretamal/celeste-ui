import { computed, defineComponent, PropType } from 'vue';
import { celeste } from '@/celeste';
import { useCheckboxStyles } from './c-checkbox.styles';

export const CCheckbox = defineComponent({
  name: 'CCheckbox',
  props: {
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
      default: undefined,
    },
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const baseClass = useCheckboxStyles();
    const containerClasses = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.color}`,
      `${baseClass.value}--${props.size}`,
    ]);
    const inputClasses = computed(() => [`${baseClass.value}__input`]);

    const handleInput = () => {
      emit('update:modelValue', props.value);
    };

    return () => (
      <celeste.div class={containerClasses.value}>
        <input
          class={inputClasses.value}
          type="checkbox"
          value={props.value}
          onInput={handleInput}
          disabled={props.disabled}
        />
        {props.label && (
          <celeste.label class={`${baseClass.value}__label`}>
            {props.label}
          </celeste.label>
        )}
      </celeste.div>
    );
  },
});
