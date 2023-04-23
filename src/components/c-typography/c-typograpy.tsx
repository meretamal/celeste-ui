import { PropType, computed, defineComponent } from 'vue';

export const CTypography = defineComponent({
  name: 'CTypography',
  props: {
    variant: {
      type: String as PropType<
        'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2'
      >,
      default: 'b1',
    },
    component: {
      type: String,
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

    const Tag = computed(
      () => props.component || defaultMapping[props.variant],
    );
    // eslint-disable-next-line react/jsx-pascal-case
    return () => <Tag.value>{slots.default?.()}</Tag.value>;
  },
});
