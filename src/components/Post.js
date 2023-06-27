import { Heart } from "@phosphor-icons/react";
import styled from "styled-components";
import { ProfilePhotoStyled } from "./Profile.js";

export default function Post({
	userName,
	userPhotoUrl,
	createdAt,
	photoUrl,
	description,
	likesCount,
	isLiked = false
}) {
	return (
		<PostStyled isLiked={isLiked}>
			<div>
				<img alt={`${userName}-${createdAt}`} src={photoUrl} />
			</div>
			<div>
				<div>
					<PostHeaderStyled>
						<ProfilePhotoStyled alt={`${userName}-photo`} src={userPhotoUrl} />
						<p>{userName}</p>
						<p>{new Date(createdAt).toLocaleDateString()}</p>
					</PostHeaderStyled>
					<main>{description}</main>
				</div>
				<footer>
					<Heart weight="duotone" />
					{likesCount} curtidas
				</footer>
			</div>
		</PostStyled>
	);
}

const PostStyled = styled.article`
  display: flex;
  padding: 16px;
  gap: 16px;
  background: #24211f;
  border-radius: 24px;
  overflow: hidden;

  & > div:first-child {
    width: 60%;
    height: 350px;
    border-radius: 16px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ease 0.5s;
      cursor: pointer;
      will-change: auto;
      backface-visibility: hidden;

      :hover {
        transform: scale(1.1);
      }
    }
  }

  & > div:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  main {
    font-size: 16px;
    line-height: 20px;
    color: #a8a29e;
    padding: 16px 0;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    svg {
      font-size: 32px;
      cursor: pointer;
      transition: transform ease 0.3s;
      color: ${({ isLiked }) => isLiked && "#ef4444"};

      :hover {
        transform: scale(1.1);
      }
      :active {
        transform: scale(1);
      }
    }
  }
`;

const PostHeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 100%;
  }

  p {
    font-size: 14px;
  }

  p:last-child {
    margin-left: auto;
    color: #a8a29e;
  }
`;
