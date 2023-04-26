import { defineComponent, computed, PropType } from 'vue';
import { celeste } from '@/celeste';
import { useButtonStyles } from './c-button.styles';

export const CButton = defineComponent({
  name: 'CButton',
  props: {
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    color: {
      type: String as PropType<
        'primary' | 'success' | 'info' | 'warning' | 'danger'
      >,
      default: 'primary',
    },
    fullWidth: {
      type: Boolean,
    },
    variant: {
      type: String as PropType<'contained' | 'outlined' | 'text'>,
      default: 'contained',
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const baseClass = useButtonStyles();

    const classes = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.size}`,
      `${baseClass.value}--${props.variant}`,
      `${baseClass.value}--${props.color}`,
      {
        [`${baseClass.value}--full-width`]: props.fullWidth,
      },
    ]);

    const handleClick = () => {
      emit('click');
    };

    return () => (
      <celeste.button
        disabled={props.disabled}
        class={classes.value}
        type="button"
        onClick={handleClick}
      >
        {slots.default?.()}
      </celeste.button>
    );
  },
});
