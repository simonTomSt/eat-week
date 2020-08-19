import React from 'react';
import TopBar from '../genericComponents/TopBar/TopBar';
import AsideBar from '../genericComponents/AsideBar/AsideBar';
import Interface from './Interface/Interface';
const Dashboard = () => {
  return (
    <>
      <TopBar />
      <div className="row" style={{ display: 'flex' }}>
        <AsideBar />
        <Interface />
      </div>
    </>
  );
};

export default Dashboard;
