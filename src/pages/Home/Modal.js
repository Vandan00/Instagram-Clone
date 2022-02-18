import React from "react";
import styles from "./Modal.css";
import { FaRegHeart } from "react-icons/fa";

const Modal = ({ setshowModal, src, message }) => {
  console.log(src);
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button className={styles.modalBtn} onClick={() => setshowModal(false)}>
          X
        </button>
        <div className={styles.modalImage}>
          <img className={styles.imageModal} src={src} />
          {/*<img src={src} />
          <img src={source} /> */}
        </div>
        <div className={styles.modalContent}>
          <img
            src="./../assets/images/user.jpg"
            alt="user"
            className={styles.profileImg}
          />
          <div className={styles.header}>
            <span>
              <p>Angela Jolie</p>
              <br />
              <p>Uttar Pradesh, India</p>
            </span>
          </div>
          <hr />
          <img
            src="./../assets/images/user.jpg"
            alt="user"
            className={styles.profileImg}
          />
          <div className={styles.caption}>{message}</div>
          <div className={styles.likes}>
            <FaRegHeart className={styles.heart} />
            <p>Liked by Vandan and 100 others</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
