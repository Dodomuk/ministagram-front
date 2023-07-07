import CustomizeToast from '@/components/common/customize-toast';
import { HouseCountReq } from '@/interface/census';
import { ToastType } from '@/interface/common';
import { houseCountStat } from '@/selector/census_selector';
import { getHouseCounts } from '@/store/census_store';
import { progressBeforeNav } from '@/utils/everything';
import { toolBox } from '@/utils/sgis_kit';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import SearchBox from '../tools/search_box';

function HouseCount() {
    const houseCountStatHandler = useSetRecoilState(houseCountStat);

    const navigate = useNavigate();

    const tools = toolBox['house'];

    async function getHouseCount(params: HouseCountReq) {
        if (params) {
            const houseCountReqParam: HouseCountReq = {
                accessToken: params.accessToken,
                year: params.year
            };

            await getHouseCounts(houseCountReqParam).then((res) => {
                houseCountStatHandler(res);
            });

            progressBeforeNav(navigate, 'housecount');
        } else {
            CustomizeToast('년도를 입력해주세요!', ToastType.ERROR);
        }
    }

    return (
        <>
            <SearchBox callFunc={getHouseCount} tools={tools} />
        </>
    );
}

export default HouseCount;
