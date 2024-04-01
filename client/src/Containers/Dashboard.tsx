import React from 'react';
import EmployeesTable from '../Tabs/EmployeesTab';
import ProjectTable from '../Tabs/ProjectsTab';
import { useSidebarContext } from '../Context/TabContext';
import Button from '../Components/Buttons/Button';
import TaskTab from '../Tabs/TasksTab';

const DashboardIntro:React.FC=()=>{
  return(
    <div className='overflow-hidden h-full flex flex-col justify-center items-center bg-black w-full'>
        <h1 className='flex text-3xl font-bold'>TeamTrack</h1>
        <Button text={`Docs`}/>
    </div>
  )
}

const Dashboard: React.FC = () => {
  const { activeButton } = useSidebarContext();

  const componentMap :{ [key: string]: React.ReactElement }= {
    '/': <DashboardIntro />,
    'Employees': <EmployeesTable />,
    'Projects': <ProjectTable />,
    'Tasks':<TaskTab/>
  };

  return (
    <div className='overflow-y-auto h-full flex-col bg-white dark:bg-black w-full'>
      {componentMap[activeButton]}
    </div>
  );
};

export default Dashboard;
