import { toast, ToastOptions } from "react-toastify";

interface ToastConfig extends ToastOptions {
  toastId: string;
}

const getConfig = (config: ToastOptions = {}): ToastConfig => {
  const defaultToastConfig: ToastConfig = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    pauseOnFocusLoss: true,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    toastId: "TO_PREVENT_DUPLICATE_TOAST",
  };

  const mergedConfig: any = {
    ...defaultToastConfig,
    ...config,
  };

  return mergedConfig;
};

enum NotificationTypes {
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
}

interface ShowNotificationParams {
  type: NotificationTypes;
  config?: ToastOptions;
  message: string;
}

const showNotification = ({
  type,
  config = {},
  message,
}: ShowNotificationParams): void => {
  if (message) {
    toast(message, { ...getConfig(config), type });
  }
};

interface NotificationHelpers {
  info: (message?: string, config?: ToastOptions) => void;
  success: (message?: string, config?: ToastOptions) => void;
  warning: (message?: string, config?: ToastOptions) => void;
  error: (message?: string, config?: ToastOptions) => void;
}

const notificationHelpers: NotificationHelpers = {
  info: (message = "", config = {}) => {
    showNotification({ message, type: NotificationTypes.info, config });
  },
  success: (message = "", config = {}) => {
    showNotification({ message, type: NotificationTypes.success, config });
  },
  warning: (message = "", config = {}) => {
    showNotification({ message, type: NotificationTypes.warning, config });
  },
  error: (message = "", config = {}) => {
    showNotification({ message, type: NotificationTypes.error, config });
  },
};

export default notificationHelpers;
