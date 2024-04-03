import React from 'react';
import Navbar from "../Containers/Navbar";
import Sidebar from "../Containers/Sidebar";
import Dashboard from "../Containers/Dashboard";
import DarkModeButton from "@/Components/Buttons/DarkModeButton.tsx";
import {BackgroundGradientAnimation} from "@/3D/GradientAnimation.tsx";
import Intro from "@/Scroll/Intro.tsx";
import XHome from "@/Scroll/XHome.tsx";


const HazardLogo: React.FC = React.memo(() => {
    return (
        <div className={`w-full h-full overflow-hidden relative flex flex-col justify-center items-center `}>
            {/*This is the blue one*/}
            <div
                className={`absolute mix-blend-multiply  bg-cyan-600
             dark:mix-blend-hard-light ml-44 mt-32 dark:bg-blue-500 
             animate-blob  w-96 h-96  rounded-full filter blur-3xl`}
            ></div>
            {/*This is the Purple one*/}
            <div
                className={`absolute mb-64 mix-blend-multiply bg-purple-700
             dark:mix-blend-hard-light dark:bg-purple-500 
              animate-second w-96 h-96 rounded-full filter blur-3xl`}
            ></div>
            {/*This is the green One*/}
            <div
                className={`absolute mix-blend-hard-light bg-green-600 dark:mix-blend-hard-light mr-44 mt-32 dark:bg-red-400
              z-1  animate-fifth w-96 h-96 rounded-full filter blur-3xl`}
            ></div>
            <p className={`drop-shadow-2xl inline-block text-black font-black text-9xl`}>
                Parishkar X SprintV
            </p>

        </div>
    )
});

const Home: React.FC = React.memo(() => {

    return (
        <div className="  bg-white dark:bg-black  overflow-x-hidden ">
            <XHome/>
            <XHome/>
            <XHome/>
            <XHome/>
            {/*<XHome/>*/}
            {/*<Intro/>*/}
            {/*<Intro/>*/}
            {/*<XHome/>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
            {/*<span className={`text-9xl`}>Parishkar Singh</span>*/}
        </div>
    );
});

export default Home;
