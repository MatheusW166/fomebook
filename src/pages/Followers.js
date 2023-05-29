import styled from "styled-components";
import Header from "../components/Header.js";
import { MainStyled, TitleH2Styled } from "../styled.js";
import { Link, useParams } from "react-router-dom";
import SearchResult from "../components/SearchResult.js";
import { useState } from "react";
import { useEffect } from "react";
import { getFollowing } from "../services/following.services.js";

function getTitle(showFollowers) {
  return showFollowers ? "Seguidores" : "Seguindo";
}

export default function Following() {
  const { followType, userId } = useParams();
  const showFollowers = followType === "followers";
  const [followList, setFollowList] = useState();

  useEffect(() => {
    if (!userId) return;
    getFollowing({ userId })
      .then((result) => {
        setFollowList(showFollowers ? result.followers : result.following);
      })
      .catch(console.log);
  }, [showFollowers, userId]);

  return (
    <>
      <Header />
      <MainCustom>
        <TitleH2Styled>{getTitle(showFollowers)}</TitleH2Styled>
        <SearchResultListStyled>
          {followList?.map((result) => (
            <li key={result.id}>
              <Link to={`/users/${result.id}`}>
                <SearchResult
                  name={result?.name}
                  bio={result?.bio}
                  photoUrl={result?.photo}
                  followersCount={result?.followersCount}
                  followingCount={result?.followingCount}
                />
              </Link>
            </li>
          ))}
        </SearchResultListStyled>
      </MainCustom>
    </>
  );
}

const MainCustom = styled(MainStyled)`
  justify-content: start;
  align-items: stretch;
  margin-top: calc(85px + 48px - 24px);

  h2 {
    margin-bottom: 16px;
  }
`;

const SearchResultListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  li > div:first-child {
    border-radius: 24px;
    margin-top: 0;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }

    a:hover {
      opacity: 1;
    }
  }
`;
