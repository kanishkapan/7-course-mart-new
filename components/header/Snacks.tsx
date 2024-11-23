import React from 'react';
import styles from './Snacks.module.css';

const Snacks = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.imageWrapper}>
          <img
           src="./images/placeholder.jpg"
            alt="Hand holding a beverage"
            className={styles.headerImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h1>
            Snacks so rare, your friends will think you smuggled them.
          </h1>
          <p>
            Curious to explore more? Let’s connect and redefine your taste journey with 7 Course Mart.
          </p>
          <div className={styles.stats}>
            <div>
              <h2>850+</h2>
              <p>Daily Walk-in</p>
            </div>
            <div>
              <h2>1000+</h2>
              <p>Brands</p>
            </div>
            <div>
              <h2>35000+</h2>
              <p>Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <h2>What’s Unique About Us? We make Beverages feel like VIPs</h2>
          <p>
            At 7 Course Mart, we bring the world closer to your doorstep with an exclusive range of international products you won’t find anywhere else in India. From gourmet essentials to indulgent treats, our curated selection of 1,000+ premium brands and 35,000+ products ensures unmatched quality under one roof.
          </p>
          <p>
            Since 2020, we’ve been redefining the shopping experience not just by offering products but by creating a culinary journey with expertly trained staff to guide you through every flavor and choice. Whether it’s exploring global tastes or finding your favorite international brands, we go out of our way to offer a world of flavors, crafted to elevate every visit into an unforgettable experience.
          </p>
          <button className={styles.franchiseButton}>Join us Franchise Family</button>
        </div>
        <div className={styles.aboutImageWrapper}>
          <img
             src="./images/placeholder.jpg"
            alt="Customers shopping beverages"
            className={styles.aboutImage}
          />
        </div>
      </section>
    </div>
  );
};

export default Snacks;
