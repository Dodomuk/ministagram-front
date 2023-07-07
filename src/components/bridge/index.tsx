import { Progress } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ProgressBar() {
    const param = new URLSearchParams(useLocation().search);
    const navigate = useNavigate();
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if (percent !== 100) {
            setTimeout(() => setPercent(percent + 1), 5);
        } else {
            const location = param.get('page');
            navigate('/' + location, { replace: true });
        }
    });

    return (
        <div className="w-80 align-center">
            <Progress value={percent} color="green" />
        </div>
    );
}
export default ProgressBar;
