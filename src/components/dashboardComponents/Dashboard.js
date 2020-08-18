import React from 'react';
import TopBar from '../genericComponents/TopBar/TopBar';
import AsideBar from '../genericComponents/AsideBar/AsideBar';
import Interface from './Interface/Interface';
const Dashboard = () => {
  return (
    <>
      <TopBar />
      <AsideBar />
      <Interface />
    </>
  );
};

export default Dashboard;
