import React, { useState } from 'react'
import Header from '../components/Header'
import styles from './ProductDetails.module.css'
import bookbuzz from '../img/product.jpg'

function ProductDetails() {
  const [image,setImage]=useState()
  return (
    <div>
        <Header/>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.mainImg}>
              <img src={bookbuzz} alt=""  className={styles.img}/>
            </div>
            <div className={styles.childImgDiv}>
              <img src={bookbuzz} className={styles.childImg} alt="" />
              <img src={bookbuzz} className={styles.childImg} alt="" />
              <img src={bookbuzz} className={styles.childImg} alt="" />
            </div>
          </div>
          <div className={styles.right}>
              <h1>The Wooden Table</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum animi tenetur libero adipisci ipsum mollitia, eveniet recusandae provident quam cupiditate sit magni vitae quidem. Amet iusto consectetur non, vitae voluptatum suscipit adipisci expedita, eius optio ea possimus ipsum beatae explicabo in! Vel, aspernatur exercitationem minima optio ratione placeat ipsum quas.</p>
             <div className={styles.tagContainer}>
              <div className={styles.tag}>Tag1</div>
              <div className={styles.tag}>Tag1</div>
              <div className={styles.tag}>Tag1</div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetails