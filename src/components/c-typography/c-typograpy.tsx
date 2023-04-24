import { PropType, computed, defineComponent } from 'vue';
import { ElementType } from '@polymorphic-factory/vue';
import { celeste } from '@/celeste';
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
    fontWeight: {
      type: String as PropType<'thin' | 'light' | 'regular' | 'bold' | 'black'>,
      default: 'regular',
    },
    align: {
      type: String as PropType<
        'center' | 'inherit' | 'justify' | 'left' | 'right'
      >,
      default: 'inherit',
    },
    noWrap: {
      type: Boolean,
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
      `${baseClass.value}--${props.fontWeight}`,
      `${baseClass.value}--${props.align}`,
      {
        [`${baseClass.value}--no-wrap`]: props.noWrap,
      },
    ]);
    return () => (
      <celeste.span as={tag.value} class={classes.value}>
        {slots.default?.()}
      </celeste.span>
    );
  },
});
