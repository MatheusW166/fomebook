import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Profile({
  name,
  photoUrl,
  bio,
  followersCount,
  followingCount,
  children,
}) {
  return (
    <ProfileContainerStyled>
      <ProfilePhotoStyled src={photoUrl} alt={`avatar`} />
      <ProfileInfoStyled>
        <div>
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
        <div>
          {children}
          <div>
            <Link to="followers">
              {followersCount} <span>Seguindo</span>
            </Link>
            <Link to="followers">
              {followingCount} <span>Seguidores</span>
            </Link>
          </div>
        </div>
      </ProfileInfoStyled>
    </ProfileContainerStyled>
  );
}

export const ProfileContainerStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 48px;
  background: #24211f;
  border-radius: 24px 24px 0px 0px;
  width: 100%;
  margin-top: calc(85px + 16px - 24px);
`;

export const ProfilePhotoStyled = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid #3c342f;
  border-radius: 100%;
  object-fit: cover;
`;

export const ProfileInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-grow: 1;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 4px;
    h2 {
      font-weight: 700;
      font-size: 24px;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #a8a29e;
    }
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > div {
      display: flex;
      gap: 16px;

      span {
        color: #a8a29e;
      }
    }
  }
`;
