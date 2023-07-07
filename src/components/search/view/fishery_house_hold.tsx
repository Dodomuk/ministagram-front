import CustomizeToast from '@/components/common/customize-toast';
import { FisheryHouseHoldReq } from '@/interface/census';
import { ToastType } from '@/interface/common';
import { fisheryHouseHoldStat } from '@/selector/census_selector';
import { getFisheryHouseHolds } from '@/store/census_store';
import { progressBeforeNav } from '@/utils/everything';
import { toolBox } from '@/utils/sgis_kit';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import SearchBox from '../tools/search_box';

function FisheryHouseHold() {
    const fisheryHouseHoldStatHandler = useSetRecoilState(fisheryHouseHoldStat);

    const navigate = useNavigate();

    const tools = toolBox['fisherthousehold'];

    async function getFisheryHouseHold(params: FisheryHouseHoldReq) {
        if (params) {
            await getFisheryHouseHolds(params).then((res) => {
                fisheryHouseHoldStatHandler(res);
            });

            progressBeforeNav(navigate, 'fisheryHouseHold');
        } else {
            CustomizeToast('연도를 입력해주세요!', ToastType.ERROR);
        }
    }

    return (
        <>
            <SearchBox callFunc={getFisheryHouseHold} tools={tools} />
        </>
    );
}
export default FisheryHouseHold;
