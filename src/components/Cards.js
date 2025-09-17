import Spline from '@splinetool/react-spline';

const Cards = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[600px]">
          <Spline scene="https://prod.spline.design/VVsg1IeE3OyN-3GH/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
