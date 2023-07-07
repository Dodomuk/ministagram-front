import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Error from '@components/error/index';
import ProgressBar from '@components/bridge';

// FIXME : 스플리팅 예시 (나중에 쓸거면 쓰셈)
// const Population = React.lazy(() => import('@bridge/census/population'));

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    },
    {
        path: '/error',
        element: <Error />
    },
    {
        path: '/progress',
        element: <ProgressBar />
    }
]);
