import React, {useLayoutEffect, useRef} from "react";
import {BackgroundGradientAnimation} from "@/3D/GradientAnimation.tsx";
import {gsap} from "gsap";

const XHome:React.FC=React.memo(()=>{
    const animatedRef = useRef(null);
    const animatedBG = useRef(null);
    const animatedBG2 = useRef(null);
    useLayoutEffect(() => {
        const animated = animatedRef.current;
        const animatedScreen1 = animatedBG.current;
        const animatedScreen2 = animatedBG2.current;

        const SprintTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: animated,
                start: 'top 90%',
                end: 'bottom ',
                scrub: true,
                markers:true
            },
        });
        SprintTimeline.to(animated, {
            // y: -200,
        });
        const XTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: [animatedScreen1],
                start: 'top 50%',
                end: 'bottom ',
                scrub: true,
                markers:true

            },
        });
        const NameTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: [animatedScreen1],
                start: 'top 0%',
                end: 'bottom ',
                scrub: true,
                markers:true

            },
        });
        NameTimeline.to([animatedScreen1], {
            y: '-50vw',
        });
        XTimeline.to([animatedScreen2], {
            // x: '50vw',
        });
        return () => {
            SprintTimeline.kill();
            XTimeline.kill();
            NameTimeline.kill();
        };
    }, []);
    return (
        <BackgroundGradientAnimation>
            <div
                className="relative z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center">
                {/*<p className=" drop-shadow-2xl text-9xl text-white ">*/}
                {/*</p>*/}

                <span ref={animatedRef}
                      className={` absolute font-teko font-black text-center  z-12 flex flex-col text-white text-6xl md:text-9xl `}>
                Parishkar
            </span>
                <div ref={animatedBG}
                     className={` absolute font-teko font-black text-center  z-12 flex flex-col text-white text-6xl md:text-9xl `}>X
                </div>
                <div ref={animatedBG2}
                     className={` absolute font-teko font-black text-center  z-12 flex flex-col text-white text-6xl md:text-9xl `}>SprintV
                </div>
            </div>
        </BackgroundGradientAnimation>
    )
});
export default XHome
