import { RecoilEnv } from 'recoil';

import Main from '@components/index';
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
    //Recoil 중복 호출 에러 방지
    RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

    return (
        <div className="App">
            <Main />
            <ToastContainer />
        </div>
    );
}

export default App;
