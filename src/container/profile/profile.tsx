import React, { FC } from "react";
import Data from '../../components/data/data';
// import bg from '../../assets/anthony-tran.jpg'

const Profile: FC = () => {
  return (
    // <div className="bg-[url('')] object-cover h-48 w-96">
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

          <Data />

      </div>
    </div>
  )
}

export default Profile;