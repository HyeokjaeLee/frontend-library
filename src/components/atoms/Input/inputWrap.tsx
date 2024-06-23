import {
  FixedDarkMode,
  useDarkMode,
  useInputMessageDynamicHeight,
} from '@hooks';
import type { HTMLTagProps, Size } from '@types';
import { cleanClassName, cn } from '@utils';

import styles from './InputWrap.module.scss';

export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
  size?: Size | 'fit-content';
  validationMessage?: string;
  reversed?: boolean;
  label?: string;
  required?: boolean;
  fixedDarkMode?: FixedDarkMode;
};

export const InputWrap = ({
  //* Input.Wrap props
  size = 'medium',
  validationMessage,
  reversed = false,
  label,
  required = false,
  fixedDarkMode,

  //* HTML div props
  children,
  className,
  ...restDivProps
}: InputWrapProps) => {
  const { messageRef, messageWrapHeight } =
    useInputMessageDynamicHeight(validationMessage);

  const { isDarkMode } = useDarkMode(fixedDarkMode);

  return (
    <div
      {...restDivProps}
      className={cn('ptu-relative ptu-w-96 focus:ptu-z-10', className)}
    >
      <label
        className={cn(
          'ptu-flex-col ptu-box-border ptu-w-full ptu-rounded-md ptu-transition-bg-shadow',
          styles.label,
          {
            [styles.dark]: isDarkMode,
            [styles.error]: validationMessage,
          },
        )}
      >
        {label ? (
          <p
            className={cn(
              'ptu-mt-2 ptu-text-COOL-GRAY-400 ptu-text-sm',
              {
                small: 'ptu-mx-3',
                medium: 'ptu-mx-4',
                large: 'ptu-mx-5',
                'fit-content': 'ptu-mx-0',
              }[size],
              {
                "after:ptu-content-['*'] after:ptu-text-RED-500 after:ptu-ml-1":
                  required,
              },
            )}
          >
            {label}
          </p>
        ) : null}
        <div
          className={cn(
            'ptu-relative ptu-flex ptu-gap-3 ptu-items-center ptu-justify-center ptu-box-border ptu-w-full',
            {
              'ptu-flex-row-reverse': reversed,
            },
            {
              small: 'ptu-h-7 ptu-px-3',
              medium: 'ptu-h-10 ptu-px-4',
              large: 'ptu-h-12 ptu-px-5',
              'fit-content': 'ptu-px-0 ptu-h-fit',
            }[size],
          )}
        >
          {children}
        </div>
      </label>
      <div
        className={cleanClassName(
          `${styles['validation-message-wrap']} ${
            messageWrapHeight && styles.show
          }`,
        )}
        style={messageWrapHeight}
      >
        {validationMessage ? (
          <p ref={messageRef} className={styles['validation-message']}>
            {validationMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
};
