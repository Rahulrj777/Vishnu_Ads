import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Ball = () => {
    const ballRef = useRef(null);

    useEffect(() => {
        // Bounce animation for the header section
        gsap.to(ballRef.current, {
            y: -1, // Move up
            repeat: -1, // Infinite repeat
            yoyo: true, // Reverse the animation
            duration: 0.5, // Duration of each bounce
            scale: 0.3
        });

        // Move left in the second section


        const second = gsap.timeline({
            scrollTrigger: {
                trigger: "#second-section",
                start: "top 30%",
                end: "bottom 100%",
                toggleAttribute: "play pause resume reverse",
                scrub: 1,
                // markers: true,
            }
        })

        second.to(ballRef.current, {
            x: -900,
            rotation: 100,
            backgroundColor: "#ffe2d1",
            color: "#FFFFFF",
            ease: "power1.out"
        })

        second.to(ballRef.current, {
            x: -900,
            scale: 4,
            backgroundColor: "#ffaa99",

        })


        const third = gsap.timeline({
            scrollTrigger: {
                trigger: "#third-section",
                start: "top 30%",
                end: "bottom 80%",
                toggleAttribute: "play pause resume reverse",
                scrub: 1,
                // markers: true,
            }
        })

        third.to(ballRef.current, {
            x: -900,
            rotation: 100,
            backgroundColor: "#ffe2d1",
            color: "#FFFFFF",
            ease: "power1.out"
        })

        third.to(ballRef.current, {
            x: -900,
            scale: 4,
            backgroundColor: "#ffe2d1",

        })


        const fourth = gsap.timeline({
            scrollTrigger: {
                trigger: "#fourth-section",
                start: "top 30%",
                end: "bottom 80%",
                toggleAttribute: "play pause resume reverse",
                scrub: 1,
                // markers: true,
            }
        })

        fourth.to(ballRef.current, {
            x: -900,
            rotation: 360,
            backgroundColor: "#ffe2d1",
            color: "#FFFFFF",
            ease: "power1.out"
        })

        fourth.to(ballRef.current, {
            borderRadius: "50%",
            rotation: 360,
            x: 700,
            y: 200,
            scale: 5,
            backgroundColor: "#ffe2d1",

        })

        const fifth = gsap.timeline({
            scrollTrigger: {
                trigger: "#fifth-section",
                start: "top 40%",
                end: "bottom 70%%",
                toggleAttribute: "play pause resume reverse",
                scrub: 1,
                // markers: true,
            }
        })

        fifth.to(ballRef.current, {
            x: 800, // Move ball to the left
            scale: 6,
            backgroundColor: "#ffe2d1",
        })

        fifth.to(ballRef.current, {
            x: 1200,
            scale: 8,
            rotation: 20,
            opacity: 50,
            duration: 1,
            backgroundColor: "#ffe2d1",

        })


        gsap.to(ballRef.current, {
            scrollTrigger: {
                trigger: "#sixth-section",
                start: "top 20%",
                end: "bottom 100%",
                // markers: true,
                toggleActions: "play none pasue reverse",
                scrub: 1,
            },
            x: 700, // Move ball to the left
            scale: 2,
            rotation: 400,
            duration: 90,
        });

        gsap.to(ballRef.current, {
            scrollTrigger: {
                trigger: "#seventh-section",
                start: "top 80%",
                end: "bottom 10%",
                // markers: true,
                toggleActions: "play none pasue reverse",
                scrub: 1,
            },
            x: -1000, // Move ball to the left
            scale: 2,
            duration: 1,
        });

    }, [ballRef]);

    return (
        <div className="z-80">
            {/* Ball element */}
            <div
                ref={ballRef}
                className="w-16 h-16  bg-orange-200 flex justify-center items-center rounded-full fixed top-60 left-[70%] right-[70%] transform -translate-x-1/2"
            >

            </div>
        </div>
    );
};

export default Ball;
