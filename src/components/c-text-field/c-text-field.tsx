import { PropType, computed, defineComponent } from 'vue';
import { css } from '@emotion/css';
import { lighten } from 'polished';
import { useTheme } from '../../composables';

export const CTextField = defineComponent({
  props: {
    color: {
      type: String as PropType<
        'primary' | 'success' | 'info' | 'warning' | 'danger'
      >,
      default: 'primary',
    },
    error: {
      type: Boolean,
    },
    size: {
      type: String as PropType<'medium' | 'large'>,
      default: 'medium',
    },
    type: {
      type: String as PropType<
        | 'text'
        | 'email'
        | 'date'
        | 'datetime-local'
        | 'month'
        | 'password'
        | 'tel'
        | 'time'
        | 'url'
        | 'week'
      >,
      default: 'text',
    },
  },
  setup(props) {
    const theme = useTheme();

    const baseClass = computed(() =>
      css({
        display: 'block',
        width: '100%',
        fontSize: '1rem',
        border: '2px solid #ccc',
        borderRadius: '4px',
        transition: 'all 0.3s ease-in-out',
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${lighten(0.3, theme.colors[props.color])}`,
          borderColor: theme.colors[props.color],
        },
        '&--medium': {
          padding: '0.5625rem 0.875rem',
        },
        '&--large': {
          padding: '1rem 0.875rem',
        },
        '&--error': {
          boxShadow: `0 0 0 3px ${lighten(0.3, theme.colors.danger)}`,
          borderColor: theme.colors.danger,
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 3px ${lighten(0.3, theme.colors.danger)}`,
            borderColor: theme.colors.danger,
          },
        },
      }),
    );
    const classes = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.size}`,
      {
        [`${baseClass.value}--error`]: props.error,
      },
    ]);
    return () => <input type={props.type} class={classes.value} />;
  },
});
