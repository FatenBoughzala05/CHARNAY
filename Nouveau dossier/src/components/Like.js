import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import axios from 'axios';
import { Store } from '../Store';
import AddToCartButton from './AddToCartButton';


function Like(props) {
 
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
    wishList=[],
  } = state;
  
  //     const {
  //   cart: { wishList },
  // } = state;
  
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  
  const addToWishList = (product) => {
    const updatedWishList = [...state.wishList, product];
    // console.log('Adding to wishlist:', product);
    ctxDispatch({ type: 'SET_WISHLIST', payload: updatedWishList });
  };
  const removeFromWishList = (productId) => {
    // console.log('Removing from wishlist:', productId);
    const updatedWishList = wishList.filter((product) => product._id !== productId);
    ctxDispatch({ type: 'SET_WISHLIST', payload: updatedWishList });
  };
  const isProductInWishList = useCallback(
    (productId) => {
    return wishList.some((product) => product._id === productId);
  },[wishList]);
  const [isLiked, setIsLiked] = useState(isProductInWishList(props.product._id));
  useEffect(() => {
    setIsLiked(isProductInWishList(props.product._id));
  }, [isProductInWishList,wishList, props.product._id]);
  const handleLikeClick = async () => {
    if (isLiked) {
      // Remove product from wishlist
      await removeFromWishList(props.product._id);
      // setIsLiked(false);
    } else {
      // const productInWishList = wishList.some((product) => product._id === props.product._id);
      // if (!productInWishList) {
      // Add product to wishlist
      await addToWishList(props.product);
    }
      setIsLiked(!isLiked);
    // }
  // }
  // ctxDispatch({ type: 'SET_WISHLIST', payload: wishList });
  };
  const [isLikedInProduct, setIsLikedInProduct] = useState(false);
  useEffect(() => {
    setIsLikedInProduct(isLiked);
  }, [isLiked]);
  return (
    
     
      
              <button onClick={()=>{
                handleLikeClick();
                setIsLikedInProduct(!isLikedInProduct);
              } }
              style={{
                 marginLeft: "90%" , 
                 top:-30 ,
                 position: 'relative',
                 border:"none",
                  backgroundColor:"transparent" }}>
              <i className={`fa${isLiked ? 's' : 'r'} fa-heart`} style={{ color: isLiked ? 'red' : 'black' }} />
            </button>
   
   
  );
}

export default Like;
