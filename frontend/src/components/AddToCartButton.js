import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import { Helmet } from 'react-helmet';

const AddToCartButton = ({ addToCartHandler }) => {
  const [isShown, setIsShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [counter, setCounter] = useState(0);
  const handleButtonClick = () => {
    setIsShown(true);
    const hoopCheckbox = document.getElementById('hoop');
    if (hoopCheckbox) {
      hoopCheckbox.checked = true;
    }
    setCounter((prevCounter) => prevCounter + 1);
    setTimeout(() => {
    if (typeof addToCartHandler === 'function') {
      addToCartHandler(); // Call the addToCartHandler function from the ProductScreen
    }
}, 1300);
  };

  const handleAnimationEnd = () => {
    setIsShown(false);

  };
  useEffect(() => {
    if (isShown) {
      const timeoutId = setTimeout(() => {
        setIsChecked(true);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [isShown]);

  return (
    <div>
      <div className="container">
        {!isShown && (
          <Button onClick={handleButtonClick} variant="primary">
            Add to Cart
          </Button>
        )}
        
        {isShown && (
          <div onAnimationEnd={handleAnimationEnd}>
           
              <div className="toggle basketball-hoop">
                <input id="hoop" type="checkbox" checked={isChecked} />
                <label className="toggle-item" htmlFor="hoop">
                  <div className="ball__wrapper">
                    <div className="ball"> </div>
                  </div>
                  <div>
                    <svg
                      className="shoppingcart"
                      width="100px"
                      height="100px"
                      viewBox="0 0 1024 1024"
                      // class="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      // style={{ right: '-120px', top: '-120px' }}
                      
                    >
                      <circle cx="735" cy="220" r="60" fill="red" />
                      <text
                        x="735"
                        y="255"
                        fontSize="90"
                        textAnchor="middle"
                        fill="white"
                      >
                        {counter}
                      </text>
                      <path
                        d="M276.5 529.5l499.4 1.8-25.7 148.4h-433.3z"
                        fill="#8CAAFF"
                      />
                      <path
                        d="M222.7 356.9L852.3 359.2l-32.4 181.4h-546.3z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M399.4 314.9h55.4v347.3h-55.4zM593.4 314.9h55.4v347.3h-55.4z"
                        fill="#333333"
                      />
                      <path d="M254.3 544.3v-53.1h538.1v53.1z" fill="#333333" />
                      <path
                        d="M207.8 221.1l128.7 463.2c3.8 13.9-4.3 28.2-18.2 32-0.1 0-0.1 1-0.2 1v-1c-14 3.8-28.4-4.5-32.3-18.5L157.1 234.6c-3.8-13.9 4.3-28.2 18.2-32h0.2c14-3.8 28.4 4.5 32.3 18.5z"
                        fill="#333333"
                      />
                      <path
                        d="M75.6 201.6h107.2c14.7 0 26.6 11.9 26.6 26.6v2.5c0 14.7-11.9 26.6-26.6 26.6h-107.2c-14.7 0-26.6-11.9-26.6-26.6v-2.5c0.1-14.7 11.9-26.6 26.6-26.6z"
                        fill="#333333"
                      />
                      <path
                        d="M301.4 792.8a51.2 48.7 0 1 0 102.4 0 51.2 48.7 0 1 0-102.4 0Z"
                        fill="#333333"
                      />
                      <path
                        d="M635.2 792.8a51.2 48.7 0 1 0 102.4 0 51.2 48.7 0 1 0-102.4 0Z"
                        fill="#333333"
                      />
                      <path
                        d="M315.6 662.2h429.3c14.7 0 26.8 11.4 27.8 26.1l0.1 1.7c0.9 14.4-10.1 26.9-24.5 27.8-0.5 0-1.1 0.1-1.6 0.1h-432.8c-14.5 0-26.2-11.7-26.2-26.2 0-0.5 0-1.1 0.1-1.6l0.1-1.7c0.9-14.8 13.1-26.2 27.7-26.2zM235.4 314.9H845.7c14.7 0 26.6 11.9 26.6 26.6V344c0 14.7-11.9 26.6-26.6 26.6h-610.3c-14.7 0-26.6-11.9-26.6-26.6v-2.5c0.1-14.7 12-26.6 26.6-26.6z"
                        fill="#333333"
                      />
                      <path
                        d="M849.2 317.2l0.8 0.2c15.4 4.1 24.5 19.7 20.4 34.9v0.2l-95.6 343.9c-4.2 15.1-20 24-35.3 20l-0.8-0.2c-15.4-4.1-24.5-19.7-20.4-34.9v-0.2l95.6-343.9c4.2-15.2 20-24.1 35.3-20z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                </label>
              </div>
            </div>
          
        )}
      </div>

      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Margarine|Rubik:400,500"
          rel="stylesheet"
        />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      </Helmet>
    </div>
  );
};

export default AddToCartButton;
