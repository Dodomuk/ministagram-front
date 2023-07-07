import PieChart from '@/components/chart/pie_chart';
import { ChartData } from '@/interface/common';
import { houseCountStat } from '@/selector/census_selector';
import { useRecoilValue } from 'recoil';

function HouseCount() {
    // 주택통계자료
    const houseCountData = useRecoilValue(houseCountStat);
    // 주택통계 차트 데이터
    const houseCountChartData: ChartData = { labels: [], data: [], dataLabel: '' };

    function ShowChart() {
        houseCountData.map((data) => {
            houseCountChartData.labels.push(data.adm_nm);
            houseCountChartData.data.push(data.house_cnt);
        });

        houseCountChartData.dataLabel = '주택수';

        return (
            <div className="text-center">
                <p>주택수</p>
                <PieChart chartData={houseCountChartData} />
            </div>
        );
    }

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default HouseCount;
