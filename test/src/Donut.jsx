import React from 'react';
import DonutChart from 'react-donut-chart';

let Donut = (props) => {
    return (
        <div style={{margin:"10px",padding:"10px;"}}>
            <DonutChart data={ [
                {
                    label: '',
                    value: props.amount,
                    className: ''
                },
                {
                    label: '',
                    value: 100 - props.amount,
                    isEmpty: true
                }
            ]} colors={['#2e889a']} legend={false} height={175} width={187}/>
        </div>
    );
};

export default Donut;