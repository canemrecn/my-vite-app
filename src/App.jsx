// App.jsx
import React from 'react';
import { AppProvider } from './context/appcontext/AppContext';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import DemoPie from './components/demopie'; // Güncellenmiş DemoPie komponentini burada import ediyoruz
import DemoLine from './components/demoline';

function App() {
  return (
    <AppProvider>
      <Navbar />
      <div style={{ display: 'flex', paddingTop: '70px' }}>
        <Sidebar />
        <div style={{ flex: 1, paddingLeft: '70px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px', marginLeft: '400px' }}>
            {/* DemoPie ve DemoLine için scale uygulanan div */}
            <div style={{  padding: '10px', transform: 'scale(0.80)', transformOrigin: 'top left' }}>
              <DemoPie />
            </div>
            <div style={{  padding: '10px', transform: 'scale(0.80)', transformOrigin: 'top left' }}>
              <DemoPie />
            </div>
          </div>
          <div style={{ overflow: 'auto', border: '2px solid black', padding: '10px', marginLeft: '500px', transform: 'scale(0.80)', transformOrigin: 'top left' }}>
            <DemoLine />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}


export default App;





//marginLeft: '80px'