import PieChart from '@/components/chart/pie_chart';
import { ChartData } from '@/interface/common';
import { farmHouseHoldStat } from '@/selector/census_selector';
import { useRecoilValue } from 'recoil';

function FarmHouseHold() {
    // 농가통계자료
    const farmHouseHoldData = useRecoilValue(farmHouseHoldStat);
    // 농가통계 차트 데이터
    const farmHouseHoldChartData: ChartData = { labels: [], data: [], dataLabel: '' };

    function ShowChart() {
        farmHouseHoldData.map((data) => {
            farmHouseHoldChartData.labels.push(data.adm_nm);
            farmHouseHoldChartData.data.push(data.farm_cnt);
        });
        farmHouseHoldChartData.dataLabel = '농가수';
        return (
            <div className="text-center">
                <p>농가수</p>
                <PieChart chartData={farmHouseHoldChartData} />
            </div>
        );
    }

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default FarmHouseHold;
