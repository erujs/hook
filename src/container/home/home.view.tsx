import React, { FC } from "react";
import Profile from '../../container/profile/profile';
import Deck from '../../components/deck/deck';
import styles from './home.module.css';

const Home: FC = () => {

  // let componentRender = () => {
  //   switch (status) {
  //     case null:
  //       return <LinearProgress color='secondary' />
  //     case 200:
  //       return (
  //         <>test</>
  //       )
  //     case status:
  //       return <Error errorcode={'ERROR [' + status + ']'} info={error} />
  //     // below code is not working because of above case
  //     default:
  //       break;
  //   }
  // }

  return (
    // {componentRender()}
    // <div className={styles.container}>
    //   <Deck />
    // </div>
    <Profile />
  )
}

export default Home;