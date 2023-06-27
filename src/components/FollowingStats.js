import { useEffect, useState } from "react";
import { checkIsFollowing, follow } from "../services/following.services.js";
import styled from "styled-components";

export default function FollowingStats({ afterFollow, profileId }) {
	const [isFollowing, setIsFollowing] = useState(false);

	useEffect(() => {
		checkIsFollowing({ followedId: profileId })
			.then(setIsFollowing)
			.catch(console.log);
	}, [profileId]);

	async function handleButtonClick() {
		follow({ followedId: profileId })
			.then(() => {
				afterFollow();
				setIsFollowing(true);
			})
			.catch(console.log);
	}

	if (isFollowing) {
		return <FollowingMessageStyled>Seguindo</FollowingMessageStyled>;
	}

	return (
		<FollowButtonStyled onClick={handleButtonClick}>Seguir</FollowButtonStyled>
	);
}

const FollowingMessageStyled = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #ef4444;
`;

const FollowButtonStyled = styled.button`
  padding: 0px 24px;
  height: 35px;
  border: 1px solid #ef4444;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: #ef4444;
`;
