import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RiChat3Line } from "react-icons/ri";

import styles from "./Home.css";
import Modal from "./Modal";
import { pic } from "../../store/actions/photosActions";
// import reducer from "../../store/reducers/photosReducer";

function Home() {
  const [showModal, setshowModal] = useState(false);
  //   const [pic, setpic] = useState("");
  const currentPic = useSelector((state) => state.reducer);
  console.log({ currentPic });
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4>Instagram</h4>
        <img src="./../assets/images/user.jpg" alt="user" />
      </header>
      <hr />
      <section className={styles.profile}>
        <img src="./../assets/images/user.jpg" alt="user" />
        <div>
          <h1>through_my_quirky_lens</h1>
          <span>40 posts</span>
          <span>283 followers</span>
          <span>274 following</span>
          <h3>Angela Jolie</h3>
          <p>The world through me.</p>
        </div>
      </section>
      <main className={styles.main}>
        <div className={styles.article}>
          <img
            className={styles.image}
            onClick={() => {
              setshowModal(true);
              //   dispatch(pic(1));s
              dispatch(pic(1));
              console.log(currentPic);
              //   setpic("1");
            }}
            src="./../assets/images/photo1.jpeg"
          />
          <span className={styles.likes}>
            <FaRegHeart /> 150
            {/* <RiChat3Line />
            23 */}
          </span>
          <span className={styles.chat}>
            <RiChat3Line />
            23
          </span>
          {showModal && currentPic == 1 && (
            <Modal
              setshowModal={setshowModal}
              src="./../assets/images/photo1.jpeg"
              message="Once you have downloaded the code, you need to run the command npm install on the project folder's terminal to install all the project dependencies. ● After all the project dependencies have been installed, you need to run the command npm start on your project folder’s terminal to start the development server."
            />
          )}
          {/* {setshowModal(false)} */}
        </div>
        <div className={styles.article}>
          {/* {setshowModal(false)}   */}
          <img
            className={styles.image}
            onClick={() => {
              setshowModal(true);
              dispatch(pic(2));
              //   setpic("2");
            }}
            src="./../assets/images/photo2.jpeg"
          />
          <span className={styles.likes}>
            <FaRegHeart /> 943
            {/* <RiChat3Line />
            23 */}
          </span>
          <span className={styles.chat}>
            <RiChat3Line />
            239
          </span>
          {showModal && currentPic == 2 && (
            <Modal
              setshowModal={setshowModal}
              src="./../assets/images/photo2.jpeg"
              message="Once you have downloaded the code, you need to run the command npm install on the project folder's terminal to install all the project dependencies. ● After all the project dependencies have been installed, you need to run the command npm start on your project folder’s terminal to start the development server."
            />
          )}
        </div>
        <div className={styles.article}>
          <img
            className={styles.image}
            src="./../assets/images/photo3.jpeg"
            onClick={() => {
              setshowModal(true);
              dispatch(pic(3));
              //   setpic("3");
            }}
          />
          <span className={styles.likes}>
            <FaRegHeart /> 2343
            {/* <RiChat3Line />
            23 */}
          </span>
          <span className={styles.chat}>
            <RiChat3Line />
            232
          </span>
          {showModal && currentPic == 3 && (
            <Modal
              setshowModal={setshowModal}
              src="./../assets/images/photo3.jpeg"
              message="Once you have downloaded the code, you need to run the command npm install on the project folder's terminal to install all the project dependencies. ● After all the project dependencies have been installed, you need to run the command npm start on your project folder’s terminal to start the development server."
            />
          )}
        </div>
        <div className={styles.article}>
          <img
            className={styles.image}
            src="./../assets/images/photo4.jpeg"
            onClick={() => {
              setshowModal(true);
              dispatch(pic(4));
              //   setpic("4");
            }}
          />
          <span className={styles.likes}>
            <FaRegHeart /> 1343
            {/* <RiChat3Line />
            23 */}
          </span>
          <span className={styles.chat}>
            <RiChat3Line />
            2344
          </span>
          {showModal && currentPic == 4 && (
            <Modal
              setshowModal={setshowModal}
              src="./../assets/images/photo4.jpeg"
              message="Once you have downloaded the code, you need to run the command npm install on the project folder's terminal to install all the project dependencies. ● After all the project dependencies have been installed, you need to run the command npm start on your project folder’s terminal to start the development server."
            />
          )}
        </div>
        <div className={styles.article}>
          <img
            className={styles.image}
            src="./../assets/images/photo5.jpeg"
            onClick={() => {
              setshowModal(true);
              dispatch(pic(5));
              //   setpic("5");
            }}
          />
          <span className={styles.likes}>
            <FaRegHeart /> 4333
            {/* <RiChat3Line />
            23 */}
          </span>
          <span className={styles.chat}>
            <RiChat3Line />
            23233
          </span>
          {showModal && currentPic == 5 && (
            <Modal
              setshowModal={setshowModal}
              src="./../assets/images/photo5.jpeg"
              message="Once you have downloaded the code, you need to run the command npm install on the project folder's terminal to install all the project dependencies. ● After all the project dependencies have been installed, you need to run the command npm start on your project folder’s terminal to start the development server."
            />
          )}
        </div>
        <div className={styles.article}>
          <img
            className={styles.image}
            src="./../assets/images/photo6.jpeg"
            onClick={() => {
              setshowModal(true);
              dispatch(pic(6));
              //   setpic("6");
            }}
          />
          <span className={styles.likes}>
            <FaRegHeart /> 4334
            {/* <RiChat3Line />
            23 */}
          </span>
          <span className={styles.chat}>
            <RiChat3Line />
            23234
          </span>
          {showModal && currentPic == 6 && (
            <Modal
              setshowModal={setshowModal}
              src="./../assets/images/photo6.jpeg"
              message="Once you have downloaded the code, you need to run the command npm install on the project folder's terminal to install all the project dependencies. ● After all the project dependencies have been installed, you need to run the command npm start on your project folder’s terminal to start the development server."
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
