import CustomizeToast from '@/components/common/customize-toast';
import { ForestryHouseHoldReq } from '@/interface/census';
import { ToastType } from '@/interface/common';
import { forestryHouseHoldStat } from '@/selector/census_selector';
import { getForestryHouseHolds } from '@/store/census_store';
import { progressBeforeNav } from '@/utils/everything';
import { toolBox } from '@/utils/sgis_kit';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import SearchBox from '../tools/search_box';

function ForestryHouseHold() {
    const forestryHouseHoldStatHandler = useSetRecoilState(forestryHouseHoldStat);

    const navigate = useNavigate();

    const tools = toolBox['forestryhousehold'];

    async function getForestryHouseHold(params: ForestryHouseHoldReq) {
        if (params) {
            await getForestryHouseHolds(params).then((res) => {
                forestryHouseHoldStatHandler(res);
            });

            progressBeforeNav(navigate, 'forestryHouseHold');
        } else {
            CustomizeToast('연도를 입력해주세요!', ToastType.ERROR);
        }
    }

    return (
        <>
            <SearchBox callFunc={getForestryHouseHold} tools={tools} />
        </>
    );
}

export default ForestryHouseHold;
