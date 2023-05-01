import { defineComponent, computed } from 'vue';
import merge from 'lodash/merge';
import { celeste, HTMLCelesteProps } from '@/celeste';
import { type Assign } from '@/types';
import { useButtonStyles } from './c-button.styles';

export type CButtonProps = Assign<
  HTMLCelesteProps<'button'>,
  {
    color?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    disabled?: boolean;
    fullWidth?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
  }
>;

const defaultProps = {
  color: 'primary',
  size: 'medium',
  variant: 'contained',
};

export const CButton = defineComponent<CButtonProps>({
  name: 'CButton',
  emits: ['click'],
  setup(_props, { slots, emit, attrs }) {
    const props = computed(() => merge({}, defaultProps, _props, attrs));
    const baseClass = useButtonStyles();

    const classes = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.value.size}`,
      `${baseClass.value}--${props.value.variant}`,
      `${baseClass.value}--${props.value.color}`,
      {
        [`${baseClass.value}--full-width`]: props.value.fullWidth,
      },
    ]);

    const handleClick = (event: Event) => {
      (event.currentTarget as HTMLButtonElement)?.focus();
      emit('click');
    };

    return () => (
      <celeste.button
        disabled={props.value.disabled}
        class={classes.value}
        type="button"
        onClick={handleClick}
        {...attrs}
      >
        {slots.default?.()}
      </celeste.button>
    );
  },
});
