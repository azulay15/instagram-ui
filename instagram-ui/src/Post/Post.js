import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import config from '../config/index';
import './Post.scss';
import PostLike from './PostLike/PostLike';
import PostDate from './PostDate/PostDate';
import Avatar from '../Avatar/Avatar';

function Post(props) {



	const buildImageUrl = (imageName) => {
		return config.apiUrl + '/posts/' + imageName;
	};

	return (
		<div className="col-12 col-md-4">
			<article className="Post">
				<header>
					<div className="Post__user">
						<Avatar size="md" />
					</div>
					<div className="Post__date">
						<PostDate date={props.data.createdAt} />
					</div>
				</header>
				<div className="Post__image">
					<img src={buildImageUrl(props.data.image)} title={props.data.description} />
				</div>
				<div className="Post__actions">
					<PostLike postId={props.data._id} likes={props.data.likes} />
				</div>
				<div className="Post__content">
					<h1 className="Post__description">{props.data.description}</h1>
				</div>
			</article>
		</div>
	);
}

export default Post;