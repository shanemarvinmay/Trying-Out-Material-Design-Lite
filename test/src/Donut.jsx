import React from 'react';
import DonutChart from 'react-donut-chart';

let Donut = (props) => {
    return (
        <div>
            <DonutChart data={ [
                {
                    label: 'Water',
                    value: props.amount,
                    className: 'h20'
                },
                {
                    label: '',
                    value: 33,
                    isEmpty: true
                }
            ]} colors={['#2e889a']} />
        </div>
    );
};

export default Donut;