import React, { FC, InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  label?: string;
  error: string;
  registerVal: string;
  className?: string;
  isRequired: boolean | string;
  errorMessage: string;
}

const Input: FC<InputProps> = ({
  register,
  label,
  className,
  registerVal,
  isRequired,
  errorMessage,
  ...rest
}) => {
  type isRequieredType = {
    isRequired: string;
  };
  const handleIsRequired = (): isRequieredType | any => {
    const isString =
      typeof isRequired === 'string' ? isRequired : 'Este campo es requerido';
    if (isRequired) {
      return { required: isString };
    } else {
      return false;
    }
  };

  return (
    <div className='container mb-2'>
      {label && (
        <label className='has-text-white'>
          <div className='mb-1 has-text-weight-semibold	'>
            {isRequired ? `${label}*` : label}
          </div>
        </label>
      )}
      <div className='container'>
        <input
          type='text'
          className={`${
            errorMessage
              ? 'input is-danger is-normal'
              : 'input is-normal is-focused'
          }${className}`}
          {...rest}
          {...(register && {
            ...register(registerVal, handleIsRequired()),
          })}
        ></input>
      </div>
      {errorMessage && <div className='has-text-danger	'>{errorMessage}</div>}
    </div>
  );
};

export default Input;
