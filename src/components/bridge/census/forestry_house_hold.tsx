import PieChart from '@/components/chart/pie_chart';
import { ChartData } from '@/interface/common';
import { forestryHouseHoldStat } from '@/selector/census_selector';
import { useRecoilValue } from 'recoil';

function ForestryHouseHold() {
    // 임가통계자료
    const forestryHouseHoldData = useRecoilValue(forestryHouseHoldStat);
    // 임가통계 차트 데이터
    const forestryHouseHoldChartData: ChartData = { labels: [], data: [], dataLabel: '' };

    function ShowChart() {
        forestryHouseHoldData.map((data) => {
            forestryHouseHoldChartData.labels.push(data.adm_nm);
            forestryHouseHoldChartData.data.push(data.forestry_cnt);
        });

        forestryHouseHoldChartData.dataLabel = '임가수';

        return (
            <div className="text-center">
                <p>임가수</p>
                <PieChart chartData={forestryHouseHoldChartData} />
            </div>
        );
    }

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default ForestryHouseHold;
