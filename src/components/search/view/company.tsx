import CustomizeToast from '@/components/common/customize-toast';
import { CompanyReq } from '@/interface/census';
import { ToastType } from '@/interface/common';
import { companyStat } from '@/selector/census_selector';
import { getCompanys } from '@/store/census_store';
import { progressBeforeNav } from '@/utils/everything';
import { toolBox } from '@/utils/sgis_kit';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import SearchBox from '@components/search/tools/search_box';

function Company() {
    const companyStatHandler = useSetRecoilState(companyStat);

    const navigate = useNavigate();

    const tools = toolBox['company'];

    async function getCompany(params: CompanyReq) {
        if (params) {
            await getCompanys(params).then((res) => {
                companyStatHandler(res);
            });

            progressBeforeNav(navigate, 'company');
        } else {
            CustomizeToast('연도를 입력해주세요!', ToastType.ERROR);
        }
    }

    return (
        <>
            <SearchBox callFunc={getCompany} tools={tools} />
        </>
    );
}

export default Company;
