import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './index.css';
import { routes } from './routers';
import { ThemeProvider } from '@material-tailwind/react';
import LoadingSpinner from '@components/common/loading_spinner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <ThemeProvider>
        <RecoilRoot>
            {/* Code Splitting을 위한 에러방지용 ( error: A React component suspended while rendering, but no fallback UI was specified ) */}
            <Suspense fallback={<LoadingSpinner />}>
                <RouterProvider router={routes} />
            </Suspense>
        </RecoilRoot>
    </ThemeProvider>
    // </React.StrictMode>,
);
