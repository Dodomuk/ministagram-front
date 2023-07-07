import PieChart from '@components/chart/pie_chart';
import { ChartData } from '@/interface/common';
import { fisheryHouseHoldStat } from '@/selector/census_selector';
import { useRecoilValue } from 'recoil';

function FisheryHouseHold() {
    // 어가통계자료
    const fisheryHouseHoldData = useRecoilValue(fisheryHouseHoldStat);
    // 어가통계 차트 데이터
    const fisheryHouseHoldChartData: ChartData = { labels: [], data: [], dataLabel: '' };

    function ShowChart() {
        fisheryHouseHoldData.map((data) => {
            fisheryHouseHoldChartData.labels.push(data.adm_nm);
            fisheryHouseHoldChartData.data.push(data.fishery_cnt);
        });

        fisheryHouseHoldChartData.dataLabel = '어가수';

        return (
            <div className="text-center">
                <p>어가수</p>
                <PieChart chartData={fisheryHouseHoldChartData} />
            </div>
        );
    }

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default FisheryHouseHold;
