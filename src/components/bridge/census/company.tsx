import PieChart from '@/components/chart/pie_chart';
import { ChartData } from '@/interface/common';
import { companyStat } from '@/selector/census_selector';
import { useRecoilValue } from 'recoil';

function Company() {
    // 사업체통계자료
    const companyData = useRecoilValue(companyStat);
    // 사업체통계 차트 데이터
    const companyChartData: ChartData = { labels: [], data: [], dataLabel: '' };

    function ShowCart() {
        companyData.map((data) => {
            companyChartData.labels.push(data.adm_nm);
            companyChartData.data.push(data.corp_cnt);
        });
        companyChartData.dataLabel = '사업체';
        return (
            <div className="text-center">
                <p>사업체</p>
                <PieChart chartData={companyChartData} />
            </div>
        );
    }

    return (
        <div>
            <ShowCart />
        </div>
    );
}

export default Company;
