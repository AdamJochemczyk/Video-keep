import {toast, ToastOptions} from 'react-toastify';

export enum NotificationType{
    success='success',
    error='error',
}

export const notifier = (type: NotificationType,message:string) => {
  const config:ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  switch (type) {
    case NotificationType.success:
        toast.success(message, config);  
    break;
    default:
        toast.error(message,config);
    break;
  }
};
