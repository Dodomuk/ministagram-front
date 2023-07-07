import PieChart from '@/components/chart/pie_chart';
import { ChartData } from '@/interface/common';
import { houseHoldMemberStat } from '@/selector/census_selector';
import { useRecoilValue } from 'recoil';

function HouseHoldMember() {
    // 가구원통계자료
    const houseHoldMemberData = useRecoilValue(houseHoldMemberStat);
    // 가구원통계 차트 데이터
    const houseHoldMemberChartData: ChartData = { labels: [], data: [], dataLabel: '' };
    function ShowChart() {
        houseHoldMemberData.map((data) => {
            houseHoldMemberChartData.labels.push(data.adm_nm);
            houseHoldMemberChartData.data.push(data.population);
        });

        houseHoldMemberChartData.dataLabel = '가구원 수';

        return (
            <div className="text-center">
                <p>가구원 수</p>
                <PieChart chartData={houseHoldMemberChartData} />
            </div>
        );
    }

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default HouseHoldMember;
