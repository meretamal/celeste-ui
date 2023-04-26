import { PropType, computed, defineComponent } from 'vue';
import { celeste } from '@/celeste';
import { useTextFieldStyles } from './c-text-field.styles';

export const CTextField = defineComponent({
  name: 'CTextField',
  props: {
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
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
    helperText: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { emit }) {
    const baseClass = useTextFieldStyles();

    const classes = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.size}`,
      `${baseClass.value}--${props.color}`,
      {
        [`${baseClass.value}--error`]: props.error,
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
        {props.label && (
          <celeste.label class={`${baseClass.value}__label`}>
            {props.label}
          </celeste.label>
        )}
        <celeste.input
          disabled={props.disabled}
          type={props.type}
          class={`${baseClass.value}__input`}
          onInput={handleInput}
          placeholder={props.placeholder}
          value={props.modelValue}
        />
        {props.helperText && (
          <celeste.span class={`${baseClass.value}__helper-text`}>
            {props.helperText}
          </celeste.span>
        )}
      </celeste.div>
    );
  },
});
