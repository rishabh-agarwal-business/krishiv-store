import { Label } from './label';
import { Input } from './input';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

interface BaseFormFieldProps {
    id: string;
    label: string;
    required?: boolean;
    error?: string;
    helperText?: string;
    className?: string;
}

interface InputFieldProps extends BaseFormFieldProps {
    type?: 'text' | 'number' | 'email' | 'url' | 'password';
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

interface TextareaFieldProps extends BaseFormFieldProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
}

interface SelectFieldProps extends BaseFormFieldProps {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    placeholder?: string;
}

interface CheckboxFieldProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
}

export function InputField({
    id,
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    required,
    error,
    helperText,
    className,
}: InputFieldProps) {
    return (
        <div className={className}>
            <Label htmlFor={id}>
                {label} {required && <span className="text-destructive">*</span>}
            </Label>
            <Input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
            />
            {helperText && <p className="text-xs text-muted-foreground mt-1">{helperText}</p>}
            {error && <p className="text-xs text-destructive mt-1">{error}</p>}
        </div>
    );
}

export function TextareaField({
    id,
    label,
    value,
    onChange,
    placeholder,
    rows = 3,
    required,
    error,
    helperText,
    className,
}: TextareaFieldProps) {
    return (
        <div className={className}>
            <Label htmlFor={id}>
                {label} {required && <span className="text-destructive">*</span>}
            </Label>
            <Textarea
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={rows}
                required={required}
            />
            {helperText && <p className="text-xs text-muted-foreground mt-1">{helperText}</p>}
            {error && <p className="text-xs text-destructive mt-1">{error}</p>}
        </div>
    );
}

export function SelectField({
    id,
    label,
    value,
    onChange,
    options,
    placeholder,
    required,
    error,
    helperText,
    className,
}: SelectFieldProps) {
    return (
        <div className={className}>
            <Label htmlFor={id}>
                {label} {required && <span className="text-destructive">*</span>}
            </Label>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger id={id}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {helperText && <p className="text-xs text-muted-foreground mt-1">{helperText}</p>}
            {error && <p className="text-xs text-destructive mt-1">{error}</p>}
        </div>
    );
}

export function CheckboxField({
    id,
    label,
    checked,
    onChange,
    className,
}: CheckboxFieldProps) {
    return (
        <label className={`flex items-center space-x-2 cursor-pointer ${className || ''}`}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="w-4 h-4"
            />
            <span className="text-sm">{label}</span>
        </label>
    );
}