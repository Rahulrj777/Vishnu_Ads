import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const StickyCards = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      const windowHeight = window.innerHeight;

      cards.forEach(card => {
        const positionFromTop = card.getBoundingClientRect().top;
        if (positionFromTop < windowHeight * 0.75) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
        } else {
          controls.start({ opacity: 0, y: 100 });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="flex flex-col items-center gap-10 p-10">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <motion.div
          key={index}
          className="card max-w-xs w-full bg-gray-900 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          <img src={`https://via.placeholder.com/300x200?text=Card+${item}`} alt={`Card ${item}`} className="rounded-t-lg" />
          <div className="p-40 bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">Card {item}</h3>
            <p className="text-gray-600">This is card {item} description. A great product or service.</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StickyCards;



<div className='this parant sticky this top-0 consider'>

  <div className='sticky h-[80%] py-40 bg-yellow-600 top-0'></div>
  <div className='sticky h-[80%] py-40 bg-yellow-600 top-0'></div>
  <div className='sticky h-[80%] py-40 bg-yellow-600 top-0'></div>
  <div className='sticky h-[80%] py-40 bg-yellow-600 top-0'></div>


</div>