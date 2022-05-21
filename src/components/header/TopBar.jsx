import React from 'react';
import { BsEnvelopeFill } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter, FaUserAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Flag from '../../assets/images/flag.webp';

const styles = {
   wrapper: `bg-[#F5F5F5] py-[10px] flex items-center`,
   row: `flex items-center justify-between`,
   top__left: `flex items-center gap-6`,
   top__left_item: `flex items-center gap-2 text-sm font-normal text-errie-black`,
   divider: `relative after:absolute after:-right-5 after:top-0 after:bottom-0 after:h-5 after:w-[1px] after:bg-black after:opacity-10`,
   top__right: `flex items-center gap-6`,
   top__right_social: `flex h-full items-center gap-4`,
   top__right_lang: `group relative ml-4 h-full flex cursor-pointer items-center gap-3`,
   lang__hidden: `absolute top-full right-0 hidden bg-black py-3 px-7 text-white opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100`,
};

const TopBar = () => {
   return (
      <div className={styles.wrapper}>
         <div className="container">
            <div className={styles.row}>
               <ul className={styles.top__left}>
                  <li className={styles.divider}>
                     <Link to="/" className={styles.top__left_item}>
                        <BsEnvelopeFill />
                        shariarhossainriad@gmail.com
                     </Link>
                  </li>
                  <li className={`${styles.top__left_item} ml-4`}>
                     <p>Free Shipping for all Order of $99</p>
                  </li>
               </ul>

               <div className={styles.top__right}>
                  <ul className={styles.top__right_social}>
                     <li className="text-sm">
                        <Link to="/">
                           <FaFacebookF />
                        </Link>
                     </li>
                     <li className="text-sm">
                        <Link to="/">
                           <FaTwitter />
                        </Link>
                     </li>
                     <li className="text-sm">
                        <Link to="/">
                           <FaLinkedinIn />
                        </Link>
                     </li>
                     <li className={`${styles.divider} text-sm`}>
                        <Link to="/">
                           <FaPinterest />
                        </Link>
                     </li>
                  </ul>
                  <div className={`${styles.top__right_lang} ${styles.divider}`}>
                     <img className="flex-shrink-0" src={Flag} alt="flag" />
                     <span>English</span>
                     <IoIosArrowDown fontSize="10" className="mt-[6px]" />
                     <div className={styles.lang__hidden}>
                        <ul className="flex flex-col gap-3">
                           <li>Bangla</li>
                           <li>Arabic</li>
                        </ul>
                     </div>
                  </div>
                  <div className={`ml-4 flex items-center gap-2 ${styles.divider}`}>
                     <FaUserAlt fontSize="12" />
                     <span>user</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopBar;
