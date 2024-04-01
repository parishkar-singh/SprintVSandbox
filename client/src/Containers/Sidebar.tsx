import React, { useState } from "react";
import Button from "../Components/Buttons/Button";
import { useSidebarContext } from "../Context/TabContext";
const Sidebar: React.FC = () => {
  const { setActiveButton } = useSidebarContext(); // Accessing setActiveButton from context
  return (
    <div className="h-full flex border-r-2  dark:border-neutral-700   flex-col justify-between bg-white dark:bg-black w-1/5">
      <div className="flex flex-col p-3 gap-3">
        <Button text={"Projects"} onClick={() => setActiveButton("Projects")} />
        <Button text={"Employees"} onClick={() => setActiveButton("Employees")}/>
        <Button text={"Tasks"} onClick={() => setActiveButton("Tasks")} />
        <Button text={"Progress"} onClick={() => setActiveButton("Progress")} />
        {/* <Button text={"Team's"} onClick={() => setActiveButton("Employees")} /> */}
      
        {/* <Button  text={"Project's"} /> */}
      </div>
      <div className="flex flex-col p-3 gap-3">
        <Button href="/settings" text={"Settings"} />
        <Button href="/auth" text={"Sign Out"} />
      </div>
    </div>
  );
};
export default Sidebar;
