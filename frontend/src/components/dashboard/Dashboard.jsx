import React from 'react';
import DashProfils from './components/DashProfils';
import DashProjects from './components/DashProjects';
import DashTechnos from './components/DashTechnos';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <DashProfils />
            <DashTechnos />
            <DashProjects />
        </div>
    );
};

export default Dashboard;