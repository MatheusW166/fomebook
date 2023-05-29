import styled from "styled-components";
import Header from "../components/Header.js";
import { MainStyled, TitleH2Styled } from "../styled.js";
import { InputCustomStyled } from "../components/InputCustom.js";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import SearchResult from "../components/SearchResult.js";
import { useEffect } from "react";
import { searchUsersByName } from "../services/user.services.js";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/user.context.js";

export default function SearchUsers() {
  const { search } = useLocation();
  const userNameFromUrl = queryString.parse(search)?.name;
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState();
  const { user: loggedUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.name.value?.trim();
    navigate({ search: queryString.stringify({ name: userName }) });
  }

  useEffect(() => {
    if (!userNameFromUrl?.trim()) return;
    searchUsersByName({ name: userNameFromUrl })
      .then(setSearchResult)
      .catch(console.log);
  }, [userNameFromUrl]);

  return (
    <>
      <Header highlited={1} />
      <MainCustom>
        <form onSubmit={handleSubmit}>
          <SearchInputStyled>
            <MagnifyingGlass weight="duotone" />
            <InputCustomStyled
              defaultValue={userNameFromUrl}
              name="name"
              type="text"
              placeholder="Buscar usuários"
              autoFocus
            />
          </SearchInputStyled>
        </form>
        <TitleH2Styled>Resultados</TitleH2Styled>
        <SearchResultListStyled>
          {searchResult?.map((result) => (
            <li key={result.id}>
              <Link to={`/users/${result.id}`}>
                <SearchResult
                  name={
                    result?.name +
                    (result.id === loggedUser?.id ? " (Você) " : "")
                  }
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

  form {
    margin-bottom: 48px;
  }

  h2 {
    margin-bottom: 16px;
  }
`;

const SearchInputStyled = styled.div`
  position: relative;
  margin-top: calc(85px + 48px - 24px);
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    color: #504f4e;
    font-size: 24px;
    left: 16px;
  }
  input {
    width: 100%;
    height: 60px;
    border-radius: 24px;
    padding-left: 48px;
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
