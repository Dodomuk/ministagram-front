import { toast, ToastContent, ToastOptions } from 'react-toastify';

function CustomizeToast(text: string) {
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
    return toast(content, options);
}
export default CustomizeToast;
