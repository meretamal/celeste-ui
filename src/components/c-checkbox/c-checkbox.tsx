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
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const baseClass = useCheckboxStyles();
    const inputClasses = computed(() => [
      `${baseClass.value}__input`,
      `${baseClass.value}__input--${props.color}`,
      `${baseClass.value}__input--${props.size}`,
    ]);

    const handleInput = () => {
      emit('update:modelValue', props.value);
    };

    return () => (
      <celeste.div class={baseClass.value}>
        <input
          class={inputClasses.value}
          type="checkbox"
          value={props.value}
          onInput={handleInput}
        />
      </celeste.div>
    );
  },
});
