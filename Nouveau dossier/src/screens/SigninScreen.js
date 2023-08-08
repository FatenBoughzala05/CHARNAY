import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  // return (
  //     <Container className="small-container">
  //       <Helmet>
  //         <title>Sign In</title>
  //       </Helmet>
  //       <h1 className="my-3">Sign In</h1>
  //       <Form onSubmit={submitHandler}>
  //         <Form.Group className="mb-3" controlId="email">
  //           <Form.Label>Email</Form.Label>
  //           <Form.Control
  //             type="email"
  //             required
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //         </Form.Group>
  //         <Form.Group className="mb-3" controlId="password">
  //           <Form.Label>Password</Form.Label>
  //           <Form.Control
  //             type="password"
  //             required
  //             onChange={(e) => setPassword(e.target.value)}
  //           />
  //         </Form.Group>
  //         <div className="mb-3">
  //           <Button type="submit"

  //           >Sign In</Button>
  //         </div>
  //         <div className="mb-3">
  //           New customer?{' '}
  //           <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
  //         </div>
  //         <div className="mb-3">
  //           Forget Password? <Link to={`/forget-password`}>Reset Password</Link>
  //         </div>
  //       </Form>
  //     </Container>
  //   );
  // }

  const [messageVisibility, setMessageVisibility] = useState('hidden');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  const passwordRegex = /$/gm;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(emailRegex.test(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(passwordRegex.test(e.target.value));
  };

  const handleMouseOver = () => {
    if (!isEmailValid || !isPasswordValid) {
      let containerRect = document
        .querySelector('.container')
        .getBoundingClientRect();
      let submitRect = document
        .getElementById('submit')
        .getBoundingClientRect();
      let offset = submitRect.left - containerRect.left;
      console.log(offset);
      if (offset <= 100) {
        document.getElementById('submit').style.transform =
          'translateX(16.25em)';
      } else {
        document.getElementById('submit').style.transform = 'translateX(0)';
      }
    }
  };

  const handleClick = () => {
    setMessageVisibility('visible');
  };
  return (
    <div style={{ maxWidth:"600px" }}>
    <Container className="small-container1"
    style={{  }}
    >
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>

          <Form.Control
            id="Email"
            type="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
              handleEmailChange(e);
            }}
            style={{
              borderColor: isEmailValid ? '#34bd34' : '#fe2e2e',
              backgroundColor: isEmailValid ? '#c2ffc2' : '#ffc2c2',
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control
            id="password"
            type="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
              handlePasswordChange(e);
            }}
            style={{
              borderColor: isPasswordValid ? '#34bd34' : '#fe2e2e',
              backgroundColor: isPasswordValid ? '#c2ffc2' : '#ffc2c2',
            }}
          />
        </Form.Group>
        <div className="mb-3">
          <Button
            type="submit"
            id="submit"
            onMouseOver={handleMouseOver}
            onClick={handleClick}
            style={{
              position: 'relative',
              width: '7rem',
              padding: '0.8em 0',
              marginTop: '2em',
              border: 'none',
              display: 'block',
            }}
          >
            Sign In
          </Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
        <div className="mb-3">
          Forget Password? <Link to={`/forget-password`}>Reset Password</Link>
        </div>
        <div id="message-ref" style={{ visibility: messageVisibility }}>
          Signed Up Successfully!{' '}
        </div>
      </Form>
    </Container>
    </div>
  );
}
