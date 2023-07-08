import { useEffect } from 'react';
import { injectStyle } from 'react-toastify/dist/inject-style';

const Main = () => {
    useEffect(() => {
        // toastify style 주입(애플리케이션 실행 시 1회 필수)
        injectStyle();
    }, []);

    return <p>test</p>;
};
export default Main;
