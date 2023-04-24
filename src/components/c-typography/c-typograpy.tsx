import { PropType, computed, defineComponent } from 'vue';
import { ElementType } from '@polymorphic-factory/vue';
import { celeste } from '../../celeste';
import { useTypographyStyles } from './c-typography.styles';

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

    const baseClass = useTypographyStyles();

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
