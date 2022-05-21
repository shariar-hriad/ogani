import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.webp';

const styles = {
   wrapper: `bg-smoke-white pt-8 lg:pt-12`,
   footer__adress: `text-base leading-9 text-errie-black`,
};

const Footer = () => {
   return (
      <footer className={styles.wrapper}>
         <div className="container">
            <div className="grid">
               <div className="flex flex-col gap-5">
                  <Link to="/">
                     <img src={Logo} alt="" />
                  </Link>
                  <div className={styles.footer__adress}>
                     <p>Adress: 60-49 Road 11378</p>
                     <p>New York</p>
                     <p>Phone: +65145784545</p>
                     <p>Email: shariarhossainriad@gmail.com</p>
                  </div>
               </div>
               <div>
                  <h5>Useful Links</h5>
                  <div className="flex gap-5">
                     <ul>
                        <li>
                           <Link to="/">About Us</Link>
                        </li>
                        <li>
                           <Link to="/">About Our Shop</Link>
                        </li>
                        <li>
                           <Link to="/">Secure Shopping</Link>
                        </li>
                        <li>
                           <Link to="/">Delivery Information</Link>
                        </li>
                        <li>
                           <Link to="/">Privacy Policy</Link>
                        </li>
                        <li>
                           <Link to="/">Our Sitemap</Link>
                        </li>
                     </ul>
                     <ul>
                        <li>
                           <Link to="/">Who We Are</Link>
                        </li>
                        <li>
                           <Link to="/">Our Services</Link>
                        </li>
                        <li>
                           <Link to="/">Projects</Link>
                        </li>
                        <li>
                           <Link to="/">Contact</Link>
                        </li>
                        <li>
                           <Link to="/">Innovation</Link>
                        </li>
                        <li>
                           <Link to="/">Testimonials</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
