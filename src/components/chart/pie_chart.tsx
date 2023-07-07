import { chartSketch } from '@/utils/everything';
import { ChartData } from '@interface/common';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

import '@scss/chart.scss';

Chart.register(ArcElement, Tooltip);

function PieChart(props: { chartData: ChartData }) {
    useEffect(() => {
        console.debug('PieChart', props.chartData);
    }, []);

    const data = {
        labels: props.chartData.labels,
        datasets: [
            {
                label: props.chartData.dataLabel ?? '',
                data: props.chartData.data ?? [],
                backgroundColor: chartSketch(props.chartData.data.length ?? 0)
            }
        ]
    };

    return (
        <div className="box-wrapper">
            <Pie data={data} />
        </div>
    );
}

export default PieChart;
