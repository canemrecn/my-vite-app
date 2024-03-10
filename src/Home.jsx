// Home.jsx
import React, { useState, useEffect } from 'react';
import DemoPie from './components/demopie';
import DemoLine from './components/demoline';

const Home = () => {
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    // Pie verilerini fetch etme
    const fetchPieData = async () => {
      // Bu URL pie grafik için uygun veri sağlamalı, örnek URL kullanıyorum
      const response = await fetch('PIE_DATA_URL');
      const data = await response.json();
      setPieData(data);
    };

    // Line verilerini fetch etme
    const fetchLineData = async () => {
      // Bu URL line grafik için uygun veri sağlamalı, örnek URL kullanıyorum
      const response = await fetch('LINE_DATA_URL');
      const data = await response.json();
      setLineData(data);
    };

    fetchPieData();
    fetchLineData();
  }, []);

  return (
    <div>
      <DemoPie data={pieData} />
      <DemoLine data={lineData} />
    </div>
  );
};

export default Home;