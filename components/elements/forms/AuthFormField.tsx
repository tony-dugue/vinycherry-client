import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AuthInput } from '@/components/ui/input';
import { FieldValues } from 'react-hook-form';

interface AuthFormFieldProps extends FieldValues {
  label: string;
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

const AuthFormField = ({ label, name, placeholder, type, disabled, autoComplete }: AuthFormFieldProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="mb-6">
          <FormLabel className="ms-[4px] text-sm font-normal">{label}</FormLabel>
          <FormControl>
            <AuthInput
              type={type ?? 'text'}
              disabled={disabled}
              placeholder={placeholder ?? ''}
              autoComplete={autoComplete ?? 'off'}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AuthFormField;
