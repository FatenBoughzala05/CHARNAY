import React, { useContext, useEffect, useState } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';

export default function DeleveryMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, deleveryMethod },
  } = state;

  const [deleveryMethodName, setDeleveryMethod] = useState(
    deleveryMethod || 'Aramex'
  );
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_DELEVERY_METHOD', payload: deleveryMethodName});
    localStorage.setItem('deleveryMethod', deleveryMethodName);
    navigate('/payment');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Delevering</title>
        </Helmet>
        <h1 className="my-3">Delevering </h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Aramex"
              label="Aramex"
              value="Aramex"
              checked={deleveryMethodName === 'Aramex'}
              onChange={(e) => setDeleveryMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Tunisian Post"
              label="Tunisian Post"
              value="Tunisian Post"
              checked={deleveryMethodName === 'Tunisian Post'}
              onChange={(e) => setDeleveryMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
