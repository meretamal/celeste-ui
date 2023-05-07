import { defineComponent, PropType, computed } from 'vue';
import merge from 'lodash/merge';
import { Assign } from '@/types';
import { celeste, HTMLCelesteProps } from '@/celeste';
import { useSelectStyles } from './c-select.styles';

export type CSelectProps = Assign<
  HTMLCelesteProps<'select'>,
  {
    color?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    id?: string;
    label?: string;
    modelValue?: string | number;
    placeholder?: string;
    size?: 'medium' | 'large';
  }
>;

const defaultProps = {
  color: 'primary',
  size: 'medium',
};

export const CSelect = defineComponent({
  name: 'CSelect',
  props: {
    modelValue: [String, Number] as PropType<CSelectProps['modelValue']>,
    color: String as PropType<CSelectProps['color']>,
    error: Boolean as PropType<CSelectProps['error']>,
    size: String as PropType<CSelectProps['size']>,
    helperText: String as PropType<CSelectProps['helperText']>,
    placeholder: String as PropType<CSelectProps['placeholder']>,
    label: String as PropType<CSelectProps['label']>,
    disabled: Boolean as PropType<CSelectProps['disabled']>,
    id: String as PropType<CSelectProps['id']>,
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(_props, { emit, slots, attrs }) {
    const props = computed(() => merge({}, defaultProps, _props, attrs));

    const baseClass = useSelectStyles();
    const classes = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.value.size}`,
      `${baseClass.value}--${props.value.color}`,
      {
        [`${baseClass.value}--error`]: props.value.error,
      },
    ]);

    const handleInput = (event: Event) => {
      emit('input', (event.currentTarget as HTMLInputElement)?.value);
      emit('change', (event.currentTarget as HTMLInputElement)?.value);
      emit(
        'update:modelValue',
        (event.currentTarget as HTMLInputElement)?.value,
      );
    };

    return () => (
      <celeste.div class={classes.value}>
        {props.value.label && (
          <celeste.label
            class={`${baseClass.value}__label`}
            for={props.value.id}
          >
            {props.value.label}
          </celeste.label>
        )}
        <celeste.select
          disabled={props.value.disabled}
          class={`${baseClass.value}__input`}
          onInput={handleInput}
          value={props.value.modelValue}
          id={props.value.id}
          {...attrs}
        >
          {props.value.placeholder && (
            <celeste.option
              value=""
              disabled
              selected
              class={`${baseClass.value}__input__placeholder`}
            >
              {props.value.placeholder}
            </celeste.option>
          )}
          {slots.default?.()}
        </celeste.select>
        {props.value.helperText && (
          <celeste.span class={`${baseClass.value}__helper-text`}>
            {props.value.helperText}
          </celeste.span>
        )}
      </celeste.div>
    );
  },
});
