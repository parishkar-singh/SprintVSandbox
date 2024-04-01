import React from "react";
import {BackgroundGradientAnimation} from "@/3D/GradientAnimation.tsx";

export function BackgroundGradientAnimationDemo() {
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <p className=" drop-shadow-2xl text-white ">
                    Parishkar X SprintV
                </p>
            </div>
        </BackgroundGradientAnimation>
    );
}
