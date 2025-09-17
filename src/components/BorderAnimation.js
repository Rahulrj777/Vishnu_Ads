import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BorderAnimation = () => {
    const borderRef = useRef(null);

    useEffect(() => {
        // Animate the border width from left to right on scroll
        gsap.to(borderRef.current, {
            scrollTrigger: {
                trigger: "#border-section", // Section that triggers the animation
                start: "top 80%", // When the top of the section reaches the center of the viewport
                end: "bottom 100%", // End when the bottom of the section reaches the center
                scrub: 1, // Link animation to the scroll position
                // markers: true, 
                toggleActions: "play none pause reverse", // Actions on scroll
            },
            scaleX: 1, // Scale the width of the element (from 0 to 1)
            transformOrigin: "left center", // Ensures that the scaling happens from the left side
            duration: 0.5, // Smooth and slower duration for the animation
            ease: "slow(0.7,0.7,false)", // Easing for smooth acceleration and deceleration
        });

        gsap.to(borderRef.current, {
            scrollTrigger: {
                trigger: "#first-border", // Section that triggers the animation
                start: "top 70%", // When the top of the section reaches the center of the viewport
                end: "bottom 100%", // End when the bottom of the section reaches the center
                scrub: 1, // Link animation to the scroll position
                // markers: true, 
                toggleActions: "play none pause reverse", // Actions on scroll
            },
            scaleX: 1, // Scale the width of the element (from 0 to 1)
            transformOrigin: "left center", // Ensures that the scaling happens from the left side
            duration: 0.5, // Smooth and slower duration for the animation
            ease: "power1.inOut", // Easing for smooth acceleration and deceleration
        });

        gsap.to(borderRef.current, {
            scrollTrigger: {
                trigger: "#second-border", // Section that triggers the animation
                start: "top 50%", // When the top of the section reaches the center of the viewport
                end: "bottom 90%", // End when the bottom of the section reaches the center
                scrub: 1, // Link animation to the scroll position
                // markers: true,
                toggleActions: "play none pause reverse", // Actions on scroll
            },
            scaleX: 1, // Scale the width of the element (from 0 to 1)
            transformOrigin: "left center", // Ensures that the scaling happens from the left side
            duration: 0.5, // Smooth and slower duration for the animation
            ease: "slow(0.7,0.7,false)", // Easing for smooth acceleration and deceleration
        });

        gsap.to(borderRef.current, {
            scrollTrigger: {
                trigger: "#thrid-border", // Section that triggers the animation
                start: "top 60%", // When the top of the section reaches the center of the viewport
                end: "bottom 70%", // End when the bottom of the section reaches the center
                scrub: 1, // Link animation to the scroll position
                // markers: true,
                toggleActions: "play none pause reverse", // Actions on scroll
            },
            scaleX: 1, // Scale the width of the element (from 0 to 1)
            transformOrigin: "left center", // Ensures that the scaling happens from the left side
            duration: 20, // Smooth and slower duration for the animation
            ease: "slow(0.7,0.7,false)", // Easing for smooth acceleration and deceleration
        });
        gsap.to(borderRef.current, {
            scrollTrigger: {
                trigger: "#fourth-border", // Section that triggers the animation
                start: "top 50%", // When the top of the section reaches the center of the viewport
                end: "bottom 40%", // End when the bottom of the section reaches the center
                scrub: 1, // Link animation to the scroll position
                // markers: true, 
                toggleActions: "play none pause reverse", // Actions on scroll
            },
            scaleX: 1, // Scale the width of the element (from 0 to 1)
            transformOrigin: "left center", // Ensures that the scaling happens from the left side
            duration: 28, // Smooth and slower duration for the animation
            ease: "slow(0.7,0.7,false)", // Easing for smooth acceleration and deceleration
        });

        gsap.to(borderRef.current, {
            scrollTrigger: {
                trigger: "#client-border", // Section that triggers the animation
                start: "top 70%", // When the top of the section reaches the center of the viewport
                end: "bottom 30%", // End when the bottom of the section reaches the center
                scrub: 1, // Link animation to the scroll position
                // markers: true, 
                toggleActions: "play none pause reverse", // Actions on scroll
            },
            scaleX: 1, // Scale the width of the element (from 0 to 1)
            transformOrigin: "left center", // Ensures that the scaling happens from the left side
            duration: 28, // Smooth and slower duration for the animation
            ease: "slow(0.7,0.7,false)", // Easing for smooth acceleration and deceleration
        });


    }, []);

    return (
        <div>
            {/* Animated border section */}
            <section
                id=""
                className="flex  w-[100%] overflow-hidden"
            >
                <div
                    ref={borderRef}
                    className="border-t-2 md:border-t-4 border-gray-800 w-[70%] flex justify-start items-start transform scale-x-0 transition-all duration-500"
                ></div>



            </section>
        </div>
    );
};

export default BorderAnimation;
