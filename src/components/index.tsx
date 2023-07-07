import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { injectStyle } from 'react-toastify/dist/inject-style';

import { accessKey, selectedItem } from '@selector/sgis_selector';

import { getAccessKey } from '@module/sgis_module';

import NavBar from '@common/nav-bar';
import Population from '@components/search/view/population';
import HouseHold from '@components/search/view/household';
import HouseCount from '@components/search/view/house_count';
import Company from '@components/search/view/company';
import FarmHouseHold from '@components/search/view/farm_house_hold';
import ForestryHouseHold from '@components/search/view/forestry_house_hold';
import FisheryHouseHold from '@components/search/view/fishery_house_hold';
import HouseHoldMember from '@components/search/view/house_hold_member';
import LoadingSpinner from '@components/common/loading_spinner';

const Main = () => {
    const keyHandler = useSetRecoilState(accessKey);
    const selectedComponent = useRecoilValue(selectedItem);

    useEffect(() => {
        getAccessKey().then((res) => {
            // sgis 발급 토큰 저장
            keyHandler(res);
        });
        // toastify style 주입(1회 필수)
        injectStyle();
    }, []);

    useEffect(() => { }, [selectedComponent]);

    // FIXME : (전역화 고려)
    function moveErrorPage() {
        const navigate = useNavigate();
        navigate('/error');
    }

    function Contents() {
        switch (selectedComponent) {
            case '인구':
                return <Population />;
            case '가구':
                return <HouseHold />;
            case '주택':
                return <HouseCount />;
            case '사업체':
                return <Company />;
            case '농가':
                return <FarmHouseHold />;
            case '임가':
                return <ForestryHouseHold />;
            case '어가':
                return <FisheryHouseHold />;
            case '가구원':
                return <HouseHoldMember />;
            default:
                return <div><LoadingSpinner /></div>;
        }
    }

    return (
        <>
            <NavBar />
            <Contents />
        </>
    );
};
export default Main;
