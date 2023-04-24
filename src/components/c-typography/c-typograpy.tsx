import { PropType, computed, defineComponent } from 'vue';
import { ElementType } from '@polymorphic-factory/vue';
import { css } from '@emotion/css';
import { celeste } from '../../celeste';

export const CTypography = defineComponent({
  name: 'CTypography',
  props: {
    variant: {
      type: String as PropType<
        'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2'
      >,
      default: 'b1',
    },
    as: {
      type: String as PropType<ElementType>,
      default: null,
    },
  },
  setup(props, { slots }) {
    const defaultMapping = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      b1: 'p',
      b2: 'p',
    };

    const tag = computed(() => props.as || defaultMapping[props.variant]);

    const baseClass = computed(() =>
      css({
        '&--h1': {
          fontSize: '3rem',
          lineHeight: '3.5rem',
        },
        '&--h2': {
          fontSize: '2.25rem',
          lineHeight: '2.75rem',
        },
        '&--h3': {
          fontSize: '1.75rem',
          lineHeight: '2.25rem',
        },
        '&--h4': {
          fontSize: '1.625rem',
          lineHeight: '2.125rem',
        },
        '&--h5': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
        },
        '&--h6': {
          fontSize: '1.375rem',
          lineHeight: '1.875rem',
        },
        '&--b1': {
          fontSize: '1.125rem',
          lineHeight: '1.35rem',
        },
        '&--b2': {
          fontSize: '1rem',
          lineHeight: '1.175rem',
        },
      }),
    );
    const classes = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.variant}`,
    ]);
    return () => (
      <celeste.span as={tag.value} class={classes.value}>
        {slots.default?.()}
      </celeste.span>
    );
  },
});
