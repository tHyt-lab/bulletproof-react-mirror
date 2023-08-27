import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  name: string;
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const SelectField = ({
  name,
  label,
  options,
  error,
  className,
  defaultValue,
  registration,
  placeholder,
}: SelectFieldProps) => (
  <FieldWrapper label={label} error={error}>
    <select
      placeholder={placeholder}
      name={name}
      className={clsx(
        'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md',
        className
      )}
      defaultValue={defaultValue}
      {...registration}
    >
      {options.map(({ label, value }) => (
        <option key={label?.toString()} value={value}>
          {label}
        </option>
      ))}
    </select>
  </FieldWrapper>
);
