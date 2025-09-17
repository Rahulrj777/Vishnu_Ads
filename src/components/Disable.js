import React, { useEffect } from 'react';

const Disable = () => {
    useEffect(() => {
        const disableRightClick = (e) => e.preventDefault(); // Disable right-click globally

        document.addEventListener('contextmenu', disableRightClick); // Add event listener

        return () => {
            document.removeEventListener('contextmenu', disableRightClick); // Cleanup on unmount
        };
    }, []);

    return (
        <div >

        </div>
    );
};

export default Disable;
