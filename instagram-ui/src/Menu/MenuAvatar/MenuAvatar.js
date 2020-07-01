import React, { useContext } from 'react';
import { UserContext } from '../../user.context';
import './MenuAvatar.scss';
import './morazulay.jpg'



function  MenuAvatar() {

const { user } = useContext(UserContext);

  return (
        <div className="MenuAvatar">
            {user && <img src="./morazulay.jpg" />}
        </div>
  );
}


export default MenuAvatar;