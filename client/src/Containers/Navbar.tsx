import React from 'react'
import Button from '../Components/Buttons/Button'
import UserButton from '../Components/Buttons/UserButton'
import DarkModeButton from '../Components/Buttons/DarkModeButton'
import { useSidebarContext } from '../Context/TabContext'
import {useDispatch} from "react-redux";
import {setActiveTab} from "@/Redux/Actions.ts";

const Navbar:React.FC=()=>{
    const dispatch = useDispatch();

    const handleSetActiveTab = (tabName: string) => {
        dispatch(setActiveTab(tabName));
    };

  const { setActiveButton } = useSidebarContext(); 
    return (
        <nav className="flex items-center backdrop-blur justify-between p-4 h-16 w-full border-b-2 dark:border-neutral-700">
            <Button href="/" onClick={() => handleSetActiveTab('/')} text={`Home`} />
        <div className='flex gap-2'>
        <DarkModeButton/>
        <UserButton href='/auth' text={"Login"} />
        </div>
        {/* <Notify message='This is a working Toaster' isSuccess/> */}
      </nav>
    )
}
export default Navbar