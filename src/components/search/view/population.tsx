import { getDemographics } from '@/store/census_store';

import { DemographicsReq } from '@/interface/census';
import { useSetRecoilState } from 'recoil';
import { populationStat } from '@/selector/census_selector';
import { progressBeforeNav } from '@/utils/everything';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../tools/search_box';
import CustomizeToast from '@/components/common/customize-toast';
import { ToastType } from '@/interface/common';
import { toolBox } from '@/utils/sgis_kit';

function Population() {
    const populationStatHandler = useSetRecoilState(populationStat);

    const navigate = useNavigate();

    const tools = toolBox['population'];

    async function getPopulation(params: DemographicsReq) {
        // 년도를 선택한 경우
        if (params.year) {
            const demographicsReqParam: DemographicsReq = {
                accessToken: params.accessToken,
                year: params.year,
                gender: params.gender ?? 0
            };

            await getDemographics(demographicsReqParam).then((res) => {
                populationStatHandler(res);
            });
            progressBeforeNav(navigate, 'population');
            // 아직 년도를 선택하지 않은 경우
        } else {
            CustomizeToast('년도를 입력해주세요!', ToastType.ERROR);
        }
    }

    return (
        <>
            <SearchBox callFunc={getPopulation} tools={tools} />
        </>
    );
}

export default Population;
