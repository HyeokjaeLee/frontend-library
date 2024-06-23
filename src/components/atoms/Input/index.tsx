import { forwardRef } from 'react';

import { useFormatInputValue } from '@hooks';
import type { InputType } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cn } from '@utils';

import { InputWrap } from './inputWrap';

export type { InputWrapProps } from './inputWrap';

export interface InputChangeEvent {
  value: string;
}

export interface InputProps
  extends Omit<
    HTMLTagProps<'input'>,
    'type' | 'value' | 'width' | 'height' | 'size' | 'onChange'
  > {
  type?: InputType;
  value?: number | string;
  onChange?: (event: InputChangeEvent) => void;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

export const Input = Object.assign(
  forwardRef<HTMLInputElement, Omit<InputProps, 'ref'>>(
    (
      {
        //* Input props
        type = 'text',
        value = '',
        onChange,

        //* HTML input props
        placeholder,
        className,
        onFocus,
        onBlur,
        onInvalid,
        ...restInputProps
      },
      ref,
    ) => {
      const {
        formattedValue,
        displayFormattedValue,
        displayOriginalValue,
        convertChangeHandlerParam,
      } = useFormatInputValue({
        type,
        value,
        placeholder,
      });

      const isButton = type === 'button';

      return (
        <input
          {...restInputProps}
          ref={ref}
          onFocus={(e) => {
            displayOriginalValue();
            onFocus?.(e);
          }}
          onBlur={(e) => {
            displayFormattedValue();
            onBlur?.(e);
          }}
          type={type}
          placeholder={placeholder}
          value={formattedValue}
          className={cn(
            'ptu-w-full ptu-border-none ptu-outline-none ptu-bg-ingerit ptu-text-ingerit ptu-font-ingerit ptu-text-start ptu-transition-colors placeholder:ptu-text-placeholder',
            {
              'ptu-overflow-hidden ptu-text-ellipsis ptu-cursor-pointer disabled:ptu-cursor-default':
                isButton,
              'ptu-text-placeholder': !value && isButton,
            },
            className,
          )}
          onInvalid={(e) => {
            e.preventDefault();
            onInvalid?.(e);
          }}
          onChange={({ target: { value } }) => {
            const convertedValue = convertChangeHandlerParam(value);

            if (convertedValue !== null) onChange?.({ value });
          }}
        />
      );
    },
  ),
  {
    Wrap: InputWrap,
  },
);
