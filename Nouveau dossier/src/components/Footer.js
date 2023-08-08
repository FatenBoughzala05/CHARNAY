import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="bg-light py-4">
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img src="img/logo.png" alt="" width={180} className="mb-3" />
              <h6 className="text-uppercase font-weight-bold mb-4">
                contact
              </h6>
              <p className="font-italic text-muted">
                Rue  El Farabi trocadero sousse 4000 <br/>
                khzema Ouest <br/>

                Tel:27201105 <br/>
                Email:charninepharma@gmail.com
              </p>
              <ul className="list-inline mt-4" style={{ color: '#6ec04b' }}>
                <li className="list-inline-item">
                  <Link to="" className="link-uncolored">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="" className="link-uncolored">
                    <i className="fab fa-facebook" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="" className="link-uncolored">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="" className="link-uncolored">
                    <i className="fab fa-pinterest" />
                  </Link>
                  {/* <a href="#" target="_blank" title="pinterest"> */}
                  {/* </a> */}
                </li>
                <li className="list-inline-item">
                  <Link to="" className="link-uncolored">
                    <i className="fab fa-vimeo" />
                  </Link>
                  {/* <a href="#" target="_blank" title="vimeo"> */}
                  {/* </a> */}
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link
                    to="/search?category=bebe"
                    className="link-uncolored text-muted"
                  >
                    Pour babe
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/search?category=Adulte"
                    className="link-uncolored text-muted"
                  >
                    Pour Adulte
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/search?category=all"
                    className="link-uncolored text-muted"
                  >
                    All
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/search?category=bebe-enfants"
                    className="link-uncolored text-muted"
                  >
                    Bebe-Enfant
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/signin" className="link-uncolored text-muted">
                    Login
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="signup?redirect=/"
                    className="link-uncolored text-muted"
                  >
                    Register
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/wishList" className="link-uncolored text-muted">
                    Wishlist
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="" className="link-uncolored text-muted">
                    Our Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Newsletter
              </h6>
              <p className="text-muted mb-4">
               sign up to get the latest on sales , new releases and more
              </p>
              <div className="p-1 rounded border">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    className="form-control border-0 shadow-0"
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link"
                      style={{ color: '#ffc371' }}
                    >
                      <i
                        className="fa fa-paper-plane"
                        style={{ color: '#6ec04b' }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-4">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2023 CHARNAY All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
