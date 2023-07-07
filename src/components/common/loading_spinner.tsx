import { Oval } from 'react-loader-spinner';
import './loading_spinner.scss';

const LoadingSpinner = () => {
    return (
        <div className="loadingContainer">
            <Oval height={80} width={80} color="green" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel="oval-loading" secondaryColor="green" strokeWidth={2} strokeWidthSecondary={2} />
        </div>
    );
};

export default LoadingSpinner;
