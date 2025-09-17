import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import battle from '../images/role.png';
// import round from '../images/world.png';

gsap.registerPlugin(ScrollTrigger);

const RollAnimation = () => {
    const cricleRef = useRef(null);
    const roundRef = useRef(null);

    useEffect(() => {

        const mm = gsap.matchMedia();

        // Floating Animation
        gsap.to(cricleRef.current, {
            scrollTrigger: {
                trigger: "#startsection",
                start: "top 20%",
                end: "bottom 80%",
                toggleActions: "play none pause reverse",
                scrub: 1,
                // markers: true
            },
            y: -50,
            // repeat: -1,
            // yoyo: true,
            duration: 90,
            // rotation:180,
            scale: 0.9,
            ease: "power1.inOut"
        });


        // ---------------------------------------------------------------------------

        // Scroll Animation

        // Desktop View

        mm.add("(min-width:800px)", () => {

            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#firstsection",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1.5,
                    toggleActions: "play none pause reverse",
                    // markers: true
                },
                x: -400,
                y: 10,
                rotation: 140,
                scale: 8,
                duration: 80,
                ease: "power2.inOut"
            });

            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#secondsection",
                    start: "top 60%",
                    end: "bottom 90%",
                    toggleActions: "play none pause reverse",
                    scrub: 1.5,
                    // markers: true
                },
                x: 400,
                y: -10,
                rotation: 150,
                scale: 8,
                duration: 120,
                ease: "power2.inOut"
            })

            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#thirdsection",
                    start: "top 50%",
                    end: "bottom 90%",
                    toggleActions: "play none pasue reverse",
                    scrub: 1.5,
                    // markers: true
                },
                x: 100,
                y: 10,
                rotation: -180,
                duration: 130,
                scale: 65,
                ease: "power1.inOut"
            })


            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#fourthsection",
                    start: "top 60%",
                    end: "bottom 90%",
                    toggleActions: "play none pasue reverse",
                    scrub: 1.5,
                    // markers: true
                },
                x: -500,
                y: 20,
                rotation: 200,
                duration: 30,
                scale: 5,
                ease: "power1.inOut"
            })

            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#fifthsection",
                    start: "top 60%",
                    end: "bottom bottom",
                    toggleActions: "play none pasue reverse",
                    scrub: 1.5,
                    // markers: true
                },
                x: -12,
                y: 350,
                rotation: 180,
                duration: 30,
                scale: 12,
                ease: "power1.inOut"
            })


            gsap.to(roundRef.current, {
                scrollTrigger: {
                    trigger: "#fifthsection",
                    start: "top 80%",
                    end: "bottom 100%",
                    toggleActions: "play none pause reverse",
                    scrub: 1,
                    // markers: true
                },
                x: 0,
                y: 0,
                rotation: 200,
                ease: "bounce.inOut",
                duration: 10,
                scale: 2,
                opacity: 1
            })

        })


        // mobile view


        mm.add("(max-width:799px)", () => {

            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#firstsection",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1.5,
                    toggleActions: "play none pause reverse",
                    // markers: true
                },
                x: 0,
                y: 30,
                rotation: 220,
                scale: 6,
                duration: 80,
                ease: "power2.inOut"
            });

            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#secondsection",
                    start: "top 60%",
                    end: "bottom 90%",
                    toggleActions: "play none pause reverse",
                    scrub: 1.5,
                    // markers: true
                },
                x: 0,
                y: 10,
                rotation: -150,
                scale: 7,
                duration: 120,
                ease: "power2.inOut"
            })

            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#thirdsection",
                    start: "top 50%",
                    end: "bottom 90%",
                    toggleActions: "play none pasue reverse",
                    scrub: 1.5,
                    // markers: true
                },
                x: 100,
                y: 10,
                rotation: -180,
                duration: 130,
                scale: 85,
                ease: "power1.inOut"
            })

            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#fourthsection",
                    start: "top 60%",
                    end: "bottom 90%",
                    toggleActions: "play none pasue reverse",
                    scrub: 1.5,
                    // markers: true
                },
                x: 12,
                y: 200,
                z: 400,
                rotation: 300,
                duration: 30,
                scale: 6,
                ease: "power1.inOut"
            })


            gsap.to(cricleRef.current, {
                scrollTrigger: {
                    trigger: "#fifthsection",
                    start: "top 60%",
                    end: "bottom bottom",
                    toggleActions: "play none pasue reverse",
                    scrub: 1.5,
                    // markers: true
                },
                x: -0,
                y: 320,
                rotation: 180,
                duration: 30,
                scale: 9,
                ease: "power1.inOut"
            })

            gsap.to(roundRef.current, {
                scrollTrigger: {
                    trigger: "#fifthsection",
                    start: "top 80%",
                    end: "bottom 100%",
                    toggleActions: "play none pause reverse",
                    scrub: 1,
                    // markers: true
                },
                x: -400,
                y: 250,
                rotation: 200,
                ease: "bounce.inOut",
                duration: 10,
                scale: 2,
                opacity: 1
            })

        })


        return () => mm.revert();

    }, []);

    return (
        <div>
            {/* Add perspective for 3D context */}
            <div className='z-40'>
                <div
                    ref={cricleRef}
                    className="w-20 h-20 fixed top-60 left-[50%] right-[50%] rounded-full transform -translate-x-1/2"

                >
                    <img src={battle} className="w-full object-cover rotate-180" alt="none" />
                </div>
            </div>

           

        </div>
    );
};

export default RollAnimation