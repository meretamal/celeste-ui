import { PropType, computed, defineComponent } from 'vue';
import merge from 'lodash/merge';
import { ElementType } from '@polymorphic-factory/vue';
import { HTMLCelesteProps, celeste } from '@/celeste';
import { Assign } from '@/types';
import { useTypographyStyles } from './c-typography.styles';

export type CTypographyProps = Assign<
  HTMLCelesteProps<'p'>,
  {
    align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    as?: ElementType;
    fontWeight?: 'thin' | 'light' | 'regular' | 'bold' | 'black';
    noWrap?: boolean;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2';
  }
>;

const defaultProps = {
  variant: 'b1',
  fontWeight: 'regular',
  align: 'inherit',
};

export const CTypography = defineComponent({
  name: 'CTypography',
  props: {
    variant: String as PropType<CTypographyProps['variant']>,
    as: String as PropType<CTypographyProps['as']>,
    fontWeight: String as PropType<CTypographyProps['fontWeight']>,
    align: String as PropType<CTypographyProps['align']>,
    noWrap: Boolean as PropType<CTypographyProps['noWrap']>,
  },
  setup(_props, { slots, attrs }) {
    const props = computed(() => merge({}, defaultProps, _props, attrs));
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

    const tag = computed(
      () =>
        props.value.as || (defaultMapping[props.value.variant] as ElementType),
    );

    const baseClass = useTypographyStyles();
    const classes = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.value.variant}`,
      `${baseClass.value}--${props.value.fontWeight}`,
      `${baseClass.value}--${props.value.align}`,
      {
        [`${baseClass.value}--no-wrap`]: props.value.noWrap,
      },
    ]);
    return () => (
      <celeste.span as={tag.value} class={classes.value}>
        {slots.default?.()}
      </celeste.span>
    );
  },
});
