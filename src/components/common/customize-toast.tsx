import { ToastType } from '@/interface/common';
import { toast, ToastContent, ToastOptions } from 'react-toastify';

function CustomizeToast(text: string, type?: ToastType) {
    const content: ToastContent<unknown> = text;
    const options: ToastOptions<{}> = {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
    };
    switch (type) {
        case ToastType.ERROR:
            return toast.error(content, options);
        default:
            return toast(content, options);
    }
}
export default CustomizeToast;
