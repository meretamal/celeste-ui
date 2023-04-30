import { defineComponent, PropType, computed } from 'vue';
import { celeste } from '@/celeste';
import { useSelectStyles } from './c-select.styles';

export const CSelect = defineComponent({
  name: 'CSelect',
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
    id: {
      type: String,
      default: null,
    },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { emit, slots }) {
    const baseClass = useSelectStyles();

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
          <celeste.label class={`${baseClass.value}__label`} for={props.id}>
            {props.label}
          </celeste.label>
        )}
        <celeste.select
          disabled={props.disabled}
          class={`${baseClass.value}__input`}
          onInput={handleInput}
          value={props.modelValue}
          id={props.id}
        >
          {props.placeholder && (
            <celeste.option value="" disabled>
              {props.placeholder}
            </celeste.option>
          )}
          {slots.default?.()}
        </celeste.select>
        {props.helperText && (
          <celeste.span class={`${baseClass.value}__helper-text`}>
            {props.helperText}
          </celeste.span>
        )}
      </celeste.div>
    );
  },
});
