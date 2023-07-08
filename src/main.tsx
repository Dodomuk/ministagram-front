import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { routes } from './routers';
import LoadingSpinner from '@components/common/loading_spinner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    /* Strict모드 활성화 필요시 아래 주석 제거
    // <React.StrictMode>
    /* Code Splitting을 위한 에러방지용 ( error: A React component suspended while rendering, but no fallback UI was specified ) */
    <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={routes} />
    </Suspense>
    // </React.StrictMode>,
);
