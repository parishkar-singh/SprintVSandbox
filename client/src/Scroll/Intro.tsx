import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const animatedRef = useRef(null);
    const animatedBG = useRef(null);
    const animatedBG2 = useRef(null);
    useLayoutEffect(() => {
        const animated = animatedRef.current;
        const animatedScreen1 = animatedBG.current;
        const animatedScreen2 = animatedBG2.current;

        const nameTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: animated,
                start: 'top 0%',
                end: 'bottom ',
                scrub: true,
                markers:true
            },
        });
        nameTimeline.to(animated, {
            y: -200,
        });
        const WhiteTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: [animatedScreen1],
                start: 'bottom 0%',
                end: 'bottom ',
                scrub: true,
                markers:true

            },
        });
        const RedTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: [animatedScreen1],
                start: 'top 0%',
                end: 'bottom ',
                scrub: true,
                markers:true

            },
        });
        RedTimeline.to([animatedScreen1], {
            x: '-50vw',
        });
        WhiteTimeline.to([animatedScreen2], {
            x: '50vw',
        });
        return () => {
            nameTimeline.kill();
            WhiteTimeline.kill();
            RedTimeline.kill();
        };
    }, []);

    return (
        <div className={`relative black flex  bg-red-600 w-screen h-screen items-center justify-center`}>
            <div ref={animatedBG} className={` bg-white w-screen h-screen`}></div>
            <div ref={animatedBG2} className={` bg-black w-screen h-screen`}></div>
            <span ref={animatedRef} className={` absolute font-teko font-black text-center  z-12 flex flex-col text-white text-6xl md:text-9xl `}>
                Parishkar
                <span>
                    Singh
                </span>
            </span>
        </div>
    );
};

export default Intro;
