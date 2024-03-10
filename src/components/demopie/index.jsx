import React from 'react';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: 'Olgun',
      value: 27,
    },
    {
      type: 'Çürük',
      value: 25,
    },
    {
      type: 'Ham',
      value: 18,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      content: ({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(2)}%)`,
      style: {
        fontSize: 14,
        textAlign: 'center',
        interaction: [
          {
            type: 'elemen-active',
          }
        ],
        state: {
          active: {
            style: {
              lineWidth: 2,
              stroke: '#000',
              fillOpacity: 0.5,
            },
          },
        },
      },
    },
    
  };

  return <Pie {...config} />;
};

export default DemoPie;