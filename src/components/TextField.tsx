import React from 'react';
import { ITextFieldProps } from '../interfaces';

const TextField = ({
  onChange, onBlur, required, type,
  error, label, id,
  containerClassName, min, max,
  labelClassName, inputClassName, value,
}:ITextFieldProps) => (
  <label
    className={`input-label ${containerClassName}`}
    htmlFor={id}
  >
    <span className={`${labelClassName} input-label-text`}>{label}</span>
    <input
      id={id}
      name={id}
      className={`form-input ${inputClassName} ${error && 'invalid-input'}`}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      value={value}
      min={min}
      max={max}
    />
    {error && <span className="error-message">{error}</span>}
  </label>
);

TextField.defaultProps = {
  inputClassName: '',
  labelClassName: '',
  containerClassName: '',
  min: 0,
  max: 999999999999999,
};

export default TextField;
