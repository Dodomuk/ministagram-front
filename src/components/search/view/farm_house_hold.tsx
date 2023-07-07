import CustomizeToast from '@/components/common/customize-toast';
import { FarmHouseHoldReq } from '@/interface/census';
import { ToastType } from '@/interface/common';
import { farmHouseHoldStat } from '@/selector/census_selector';
import { getFarmHouseHolds } from '@/store/census_store';
import { progressBeforeNav } from '@/utils/everything';
import { toolBox } from '@/utils/sgis_kit';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import SearchBox from '../tools/search_box';

function FarmHouseHold() {
    const farmHouseHoldStatHandler = useSetRecoilState(farmHouseHoldStat);

    const navigate = useNavigate();

    const tools = toolBox['farmhousehold'];

    async function getFarmHouseHold(params: FarmHouseHoldReq) {
        if (params) {
            await getFarmHouseHolds(params).then((res) => {
                farmHouseHoldStatHandler(res);
            });

            progressBeforeNav(navigate, 'farmHouseHold');
        } else {
            CustomizeToast('연도를 입력해주세요!', ToastType.ERROR);
        }
    }

    return (
        <>
            <SearchBox callFunc={getFarmHouseHold} tools={tools} />
        </>
    );
}

export default FarmHouseHold;
