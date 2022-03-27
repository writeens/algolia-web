import React from 'react';
import { ISelectFieldProps } from '../interfaces';

const SelectField = ({
  onChange, onBlur, required,
  error, label, id,
  containerClassName, value,
  labelClassName, selectClassName, options,
}:ISelectFieldProps) => (
  <label
    className={`select-label ${containerClassName}`}
    htmlFor={id}
  >
    <span className={`${labelClassName} select-label-text`}>{label}</span>
    <select
      id={id}
      name={id}
      className={`form-select ${selectClassName} ${error && 'invalid-select'}`}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      value={value}
    >
      {options.map((option) => (
        <option
          key={option.name}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
    {error && <span className="error-message">{error}</span>}
  </label>
);

SelectField.defaultProps = {
  selectClassName: '',
  labelClassName: '',
  containerClassName: '',
};

export default SelectField;
