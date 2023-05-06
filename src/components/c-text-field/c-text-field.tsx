import { PropType, computed, defineComponent } from 'vue';
import merge from 'lodash/merge';
import { celeste, HTMLCelesteProps } from '@/celeste';
import { Assign } from '@/types';
import { useTextFieldStyles } from './c-text-field.styles';

export type CTextFieldProps = Assign<
  HTMLCelesteProps<'input'>,
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
    type?:
      | 'text'
      | 'email'
      | 'date'
      | 'datetime-local'
      | 'month'
      | 'password'
      | 'tel'
      | 'time'
      | 'url'
      | 'week';
  }
>;

const defaultProps = {
  color: 'primary',
  size: 'medium',
  type: 'text',
};

export const CTextField = defineComponent({
  name: 'CTextField',
  props: {
    modelValue: [String, Number] as PropType<CTextFieldProps['modelValue']>,
    color: String as PropType<CTextFieldProps['color']>,
    error: Boolean as PropType<CTextFieldProps['error']>,
    size: String as PropType<CTextFieldProps['size']>,
    type: String as PropType<CTextFieldProps['type']>,
    helperText: String as PropType<CTextFieldProps['helperText']>,
    placeholder: String as PropType<CTextFieldProps['placeholder']>,
    label: String as PropType<CTextFieldProps['label']>,
    disabled: Boolean as PropType<CTextFieldProps['disabled']>,
    id: String as PropType<CTextFieldProps['id']>,
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(_props, { emit, attrs }) {
    const props = computed(() => merge({}, defaultProps, _props, attrs));

    const baseClass = useTextFieldStyles();
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
        <celeste.input
          disabled={props.value.disabled}
          type={props.value.type}
          class={`${baseClass.value}__input`}
          onInput={handleInput}
          placeholder={props.value.placeholder}
          value={props.value.modelValue}
          id={props.value.id}
          {...attrs}
        />
        {props.value.helperText && (
          <celeste.span class={`${baseClass.value}__helper-text`}>
            {props.value.helperText}
          </celeste.span>
        )}
      </celeste.div>
    );
  },
});
