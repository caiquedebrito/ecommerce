import React, { useEffect, useState } from 'react';
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';
import banner3 from '../assets/banner3.jpeg';
import banner4 from '../assets/banner4.jpeg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const autoAdvance = setInterval(() => {
      plusSlides(1);
    }, 3000); // ajuste o intervalo conforme necessário (em milissegundos)

    return () => {
      clearInterval(autoAdvance);
    };
  }, [currentSlide]);

  const plusSlides = (n) => {
    setCurrentSlide((prevSlide) => {
        if (prevSlide + n > 4) {
            return 1;
        } else if (prevSlide + n < 1) {
            return 4;
        } else {
            return prevSlide + n;
        }
    });
  };

  const currentSlideHandler = (n) => {
    setCurrentSlide(n);
  };

  return (
    <div className="max-w-1000 relative my-5 mx-10">
      <div className={`fade ${currentSlide === 1 ? 'block' : 'hidden'}`}>
        <img src={banner1} className="w-full h-[500px]" alt="Image 1" />
      </div>

      <div className={`fade ${currentSlide === 2 ? 'block' : 'hidden'}`}>
        <img src={banner2} className="w-full h-[500px]" alt="Image 2" />
      </div>

      <div className={`fade ${currentSlide === 3 ? 'block' : 'hidden'}`}>
        <img src={banner3} className="w-full h-[500px]" alt="Image 3" />
      </div>

      <div className={`fade ${currentSlide === 4 ? 'block' : 'hidden'}`}>
        <img src={banner4} className="w-full h-[500px]" alt="Image 3" />
      </div>

      <a
        className="prev absolute top-1/2 -ml-6 cursor-pointer text-3xl"
        onClick={() => plusSlides(-1)}
      >
        &#10094;
      </a>
      <a
        className="next absolute top-1/2 -right-6 cursor-pointer text-3xl"
        onClick={() => plusSlides(1)}
      >
        &#10095;
      </a>
      <br />

      {/* <div className="text-center mt-4">
        <span
          className={`dot cursor-pointer ${currentSlide === 1 ? 'active' : ''}`}
          onClick={() => currentSlideHandler(1)}
        ></span>
        <span
          className={`dot cursor-pointer ${currentSlide === 2 ? 'active' : ''}`}
          onClick={() => currentSlideHandler(2)}
        ></span>
        <span
          className={`dot cursor-pointer ${currentSlide === 3 ? 'active' : ''}`}
          onClick={() => currentSlideHandler(3)}
        ></span>
      </div> */}
    </div>
  );
};

export default Carousel;
