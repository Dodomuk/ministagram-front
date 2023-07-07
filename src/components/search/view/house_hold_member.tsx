import CustomizeToast from '@/components/common/customize-toast';
import { HouseholdmemberReq } from '@/interface/census';
import { ToastType } from '@/interface/common';
import { houseHoldMemberStat } from '@/selector/census_selector';
import { getHouseHoldMembers } from '@/store/census_store';
import { progressBeforeNav } from '@/utils/everything';
import { toolBox } from '@/utils/sgis_kit';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import SearchBox from '../tools/search_box';

function HouseHoldMember() {
    const houseHoldMemberStatHandler = useSetRecoilState(houseHoldMemberStat);

    const navigate = useNavigate();

    const tools = toolBox['householdmember'];

    async function getHouseHoldMember(params: HouseholdmemberReq) {
        if (params) {
            await getHouseHoldMembers(params).then((res) => {
                houseHoldMemberStatHandler(res);
            });

            progressBeforeNav(navigate, 'houseHoldMember');
        } else {
            CustomizeToast('연도를 입력해주세요!', ToastType.ERROR);
        }
    }

    return (
        <>
            <SearchBox callFunc={getHouseHoldMember} tools={tools} />
        </>
    );
}

export default HouseHoldMember;
