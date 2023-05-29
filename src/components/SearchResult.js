import styled from "styled-components";
import {
  ProfileContainerStyled,
  ProfileInfoStyled,
  ProfilePhotoStyled,
} from "./Profile.js";

export default function SearchResult({
  name,
  photoUrl,
  bio,
  followersCount,
  followingCount,
  children,
}) {
  return (
    <SearchResultContainerStyled>
      <ProfilePhotoStyled src={photoUrl} alt={`avatar`} />
      <ProfileInfoStyled>
        <div>
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
        <div>
          {children}
          <div>
            <div>
              {followersCount} <span>Seguindo</span>
            </div>
            <div>
              {followingCount} <span>Seguidores</span>
            </div>
          </div>
        </div>
      </ProfileInfoStyled>
    </SearchResultContainerStyled>
  );
}

const SearchResultContainerStyled = styled(ProfileContainerStyled)`
  margin-top: 0;
  border-radius: 24px;
`;
