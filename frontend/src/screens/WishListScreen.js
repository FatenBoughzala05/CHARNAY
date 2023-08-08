import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '../components/Rating';
import Product from '../components/Product';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
export default function WishListScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wishList } = state;
  useEffect(() => {
    const storedWishList = localStorage.getItem('wishlist');
    if (storedWishList) {
      ctxDispatch({ type: 'SET_WISHLIST', payload: JSON.parse(storedWishList) });
    }
  }, [ctxDispatch]);

  useEffect(() => {
    // Save the updated wishlist to localStorage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishList));
  }, [wishList]);



  return (
    <div  >
      <Helmet>
        <title>WishList</title>
      </Helmet>
      <h2>Wishlist</h2> 
      
      {wishList && wishList.length > 0 ? (
        wishList.map((product) => (
          <div  key={product._id} className="product-item">
            <Row>
            <Col key={product.slug} sm={4} md={4} lg={4} className="mb-4" style={{ width:'400px' }}>
            <Product key={product._id} product={product} />

            
            </Col>
            </Row>
          </div>
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    
    </div>
  );
}
