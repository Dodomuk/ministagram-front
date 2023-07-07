import { useRecoilValue } from 'recoil';
import { houseHoldStat } from '@selector/census_selector';

import PieChart from '@components/chart/pie_chart';
import { ChartData } from '@interface/common';

function Household() {
    // 가구통계자료
    const houseHoldData = useRecoilValue(houseHoldStat);
    // 가구통계 차트 데이터
    const houseHoldChartData: ChartData = { labels: [], data: [], dataLabel: '' };

    function ShowChart() {
        houseHoldData.map((data) => {
            houseHoldChartData.labels.push(data.adm_nm);
            houseHoldChartData.data.push(data.household_cnt);
        });
        houseHoldChartData.dataLabel = '가구수';
        return (
            <div className="text-center">
                <p>가구수</p>
                <PieChart chartData={houseHoldChartData} />
            </div>
        );
    }

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default Household;
