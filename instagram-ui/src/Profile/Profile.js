import React, { useContext } from 'react';
import { UserContext } from '../user-context';
import './Profile.scss';
import Avatar from '../Avatar/Avatar';


function Profile() {

	const { user } = useContext(UserContext);

	return (
		<div className="Profile">
			<Avatar size='lg' image={user.avatar} />
      <h2>{user.username}</h2>
      <span>Profile</span>
		</div>
	);
}

export default Profile;