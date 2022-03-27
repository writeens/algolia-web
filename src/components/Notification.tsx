import React from 'react';
import { toast } from 'react-toastify';
import { IToastContentProps } from '../interfaces';

const ERROR_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="toast-error-svg"
  >
    <title>Cancel Icon</title>
    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
  </svg>
);
const SUCCESS_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    className="toast-success-svg"
  >
    <title>Checkmark Icon</title>
    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
  </svg>
);

const ToastContent = (props: IToastContentProps) => {
  const { title, message, type } = props;
  return (
    <>
      <header className="toast-header">
        {type === 'error' && ERROR_ICON}
        {type === 'success' && SUCCESS_ICON}
        <h3 className="toast-title">{title}</h3>
      </header>
      <hr className="toast-line" />
      <h4 className="toast-message">{message}</h4>
    </>
  );
};

export const showSuccess = async ({ title = '', message = '' }) => toast(
  <ToastContent title={title} message={message} type="success" />,
  {
    hideProgressBar: true,
    className: 'toast-success',
  },
);

export const showError = async ({ title = '', message = '' }) => toast(<ToastContent title={title} message={message} type="error" />, {
  hideProgressBar: true,
  className: 'toast-error',
});
