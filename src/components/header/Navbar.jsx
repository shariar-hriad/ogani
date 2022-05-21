import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.webp';

const styles = {
   row: `flex items-center justify-between`,
   logo: `py-[5px]`,
   nav: `flex flex-1 items-center justify-center gap-5`,
   navlink: `text-sm text-errie-black font-bold text- uppercase transiton tracking-[2px]`,
   navlink__active: `text-nasty-green`,
   cart__item: `flex items-center gap-6`,
   quantity: `absolute -top-[25px] -right-5 z-[1] block h-7 w-7 rounded-full bg-nasty-green text-sm text-center leading-7 text-white`,
};

const Navbar = () => {
   return (
      <nav className="py-3">
         <div className="container">
            <div className={styles.row}>
               <div className={styles.logo}>
                  <Link to="/">
                     <img src={Logo} alt="Ogani" />
                  </Link>
               </div>
               <ul className={styles.nav}>
                  <li>
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? `${styles.navlink} ${styles.navlink__active}`
                              : `${styles.navlink}`
                        }
                        to="/"
                     >
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? `${styles.navlink} ${styles.navlink__active}`
                              : `${styles.navlink}`
                        }
                        to="/shop"
                     >
                        Shop
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? `${styles.navlink} ${styles.navlink__active}`
                              : `${styles.navlink}`
                        }
                        to="/pages"
                     >
                        Pages
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? `${styles.navlink} ${styles.navlink__active}`
                              : `${styles.navlink}`
                        }
                        to="/blog"
                     >
                        Blog
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? `${styles.navlink} ${styles.navlink__active}`
                              : `${styles.navlink}`
                        }
                        to="/contact"
                     >
                        Contact
                     </NavLink>
                  </li>
               </ul>
               <div className={styles.cart__item}>
                  <div className="flex gap-5">
                     <button type="button" className="relative z-0">
                        <FaHeart />
                        <span className={styles.quantity}>1</span>
                     </button>
                     <button type="button" className="relative z-0">
                        <GiShoppingBag />
                        <span className={styles.quantity}>10</span>
                     </button>
                  </div>
                  <p>
                     items: <span className="tex-sm font-bold text-dark-green">$150.00</span>
                  </p>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
