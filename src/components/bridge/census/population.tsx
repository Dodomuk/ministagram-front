import { useRecoilValue } from 'recoil';
import { populationStat } from '@selector/census_selector';

import PieChart from '@components/chart/pie_chart';
import { ChartData } from '@interface/common';

function Population() {
    // 인구통계자료
    const populationData = useRecoilValue(populationStat);
    // 지역별 인구수 차트 데이터
    const populationChartData: ChartData = { labels: [], data: [], dataLabel: '' };
    // 지역별 평균 연령 차트 데이터
    const averageAgeChartData: ChartData = { labels: [], data: [], dataLabel: '' };

    function ShowChart() {
        populationData.map((data) => {
            populationChartData.labels.push(data.adm_nm);
            populationChartData.data.push(data.population);

            averageAgeChartData.labels.push(data.adm_nm);
            averageAgeChartData.data.push(data.avg_age);
        });
        populationChartData.dataLabel = '인구수';
        averageAgeChartData.dataLabel = '평균 연령';
        return (
            <div className="text-center">
                <p>인구수</p>
                <PieChart chartData={populationChartData} />
                <p>평균 연령</p>
                <PieChart chartData={averageAgeChartData} />
            </div>
        );
    }

    return (
        <div>
            <ShowChart />
        </div>
    );
}

export default Population;
