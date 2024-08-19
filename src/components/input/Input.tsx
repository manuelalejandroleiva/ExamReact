// ATSInput.tsx (Si usas TypeScript)
import React from 'react';
import './Input.scss';

interface InputProps {
  type?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  error?: boolean;
  style?: React.CSSProperties
}

const ATSInput: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  readonly = false,
  leftAdornment,
  rightAdornment,
  error = false,
  style
}) => {
  return (
    <div className={`input ${error ? 'has-error' : ''}`}>
      {leftAdornment && (
        <div className="left-adornment">{leftAdornment}</div>
      )}
      <input
        type={type}
        value={value}
        style={style}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
      />
      {rightAdornment && (
        <div className="right-adornment">{rightAdornment}</div>
      )}
    </div>
  );
};

export default ATSInput;