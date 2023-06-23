import React from 'react'
import styles from './Header.module.css'
import nariman from '../img/nariman.jpg'
import { IoIosSearch } from "react-icons/io";
function Header() {
  return (
    <div>
    <div className={styles.main}>
        <div >
            <input type="text" className={styles.searchBar} placeholder='Search for books by title,author or ISBN'/>
            <IoIosSearch className={styles.searchIcon}/>
        </div>
        <div className={styles.left}>
            <div className={styles.cart}>Cart</div>
            <div className={styles.login}>Login</div>
            <div >
                <img src={nariman} alt=""  className={styles.img}/>
            </div>
        </div>

    </div>
    <hr />

    </div>
  )
}

export default Header