import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-spring-3d-carousel";

import { config } from "react-spring";
export const Slider = () => {
    const [state, setState] = useState({
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: false,
      config: config.gentle
    });
    const [autoSlide, setAutoSlide] = useState(true); // State to control automatic sliding

  const carouselRef = useRef(); 
  const prevSlide = () => {
    setState((prevState) => ({ ...prevState, goToSlide: prevState.goToSlide - 1 }));
  };
  const nextSlide = () => {
    setState((prevState) => ({ ...prevState, goToSlide: prevState.goToSlide + 1 }));
  };
  const autoSlideNext = () => {
    setState((prevState) => ({ ...prevState, goToSlide: prevState.goToSlide + 1 }));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoSlide) {
        autoSlideNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [autoSlide]);

    const prod2 = `${process.env.PUBLIC_URL}/images/prod2.jpg`;
    const prod3 = `${process.env.PUBLIC_URL}/images/prod3.jpg`;
    const prod4 = `${process.env.PUBLIC_URL}/images/prod4.jpg`;
    const prod5 = `${process.env.PUBLIC_URL}/images/prod5.jpg`;
    const prod6 = `${process.env.PUBLIC_URL}/images/prod6.jpg`;
    const prod7 = `${process.env.PUBLIC_URL}/images/prod7.jpg`;
    const prod8 = `${process.env.PUBLIC_URL}/images/prod8.jpg`;
    const prod9 = `${process.env.PUBLIC_URL}/images/prod9.jpg`;
    let slides = [
        {
          content: <img src={prod2} alt="1" />
        },
        {
          content: <img src={prod3} alt="2" />
        },
        {
          content: <img src={prod4} alt="3" />
        },
        {
          content: <img src={prod5} alt="4" />
        },
        {
          content: <img src={prod6} alt="5" />
        },
        {
          content: <img src={prod7} alt="6" />
        },
        {
          content: <img src={prod8} alt="7" />
        },
        {
          content: <img src={prod9} alt="8" />
        }
      ].map((slide, index) => {
        return { ...slide, onClick: () => setState({ goToSlide: index }) };
      });
    
      const onChangeInput = (e) => {
        setState({
          [e.target.name]: parseInt(e.target.value, 10) || 0
        });
      };
    
      let xDown = null;
      let yDown = null;
    
      const getTouches = (evt) => {
        return (
          evt.touches || evt.originalEvent.touches // browser API
        );
      };
    
      const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      };
    
      const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
          return;
        }
    
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
    
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
    
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /*most significant*/
          if (xDiff > 0) {
            /* left swipe */
            setState({ goToSlide: state.goToSlide + 1 });
          } else {
            /* right swipe */
            setState({ goToSlide: state.goToSlide - 1 });
          }
        } else {
          if (yDiff > 0) {
            /* up swipe */
          } else {
            /* down swipe */
          }
        }
        /* reset values */
        xDown = null;
        yDown = null;
      };
    
      return (
        <div 
        // style={{fontFamily:"sans-serif" ,textAlign:"center" , margin:"auto 25rem" }}
        >
        <div
          style={{ width: "100%", height: "300px", margin: "0 auto" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Carousel
            slides={slides}
            goToSlide={state.goToSlide}
            offsetRadius={state.offsetRadius}
            showNavigation={false}
            animationConfig={state.config}
            ref={carouselRef}
          />
          <div
            style={{
              margin: "0 auto",
              marginTop: "2rem",
              width: "80%",
              height:"10%",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
             {/* <button onClick={prevSlide} style={{ fontSize: "1.5rem" }}>  &#9664; </button> */}

{/* Right arrow button */}
{/* <button onClick={nextSlide}  style={{ fontSize: "1.5rem" }} > &#9654;</button> */}

{/* Add toggle button for automatic sliding */}
{/* <button onClick={() => setAutoSlide(!autoSlide)}>
  {autoSlide ? "Pause" : "Play"}
</button> */}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
        {/* Navigation points */}
        {slides.map((_, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              margin: "0 5px",
              borderRadius: "50%",
              background: state.goToSlide === index ? "#6ec04b" : "#ddd",
              cursor: "pointer"
            }}
            onClick={() => setState({ goToSlide: index })}
          ></span>
        ))}
      </div>
        </div>
      );
    };