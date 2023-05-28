import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../context/user.context.js";
import { removeToken } from "../storage/user.storage.js";
import { House, MagnifyingGlass, SignOut } from "@phosphor-icons/react";

export default function Header({ highlited }) {
  const { user, setUser } = useContext(UserContext);
  const loggedUserRoute = `/users/${user?.id}`;

  function logOut() {
    setUser(null);
    removeToken();
  }

  return (
    <HeaderStyled isAuth={user !== null} highlited={highlited}>
      <div>
        <h1>
          <span>Fome</span>book
        </h1>
        <nav>
          <Link to={`${loggedUserRoute}`}>
            <House weight="duotone" />
          </Link>
          <Link to="/users/search">
            <MagnifyingGlass weight="duotone" />
          </Link>
          <Link to="/" onClick={logOut}>
            <SignOut weight="duotone" />
          </Link>
        </nav>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 85px;
  width: 100%;
  background: #24211f;
  border-bottom: 1px solid #3c342f;

  & > div {
    width: min(1220px, 100%);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-weight: 800;
    font-size: 40px;
    span {
      color: #ef4444;
    }
  }

  nav {
    display: flex;
    gap: 24px;
    color: #a8a29e;
    font-size: 24px;
    line-height: 0;

    ${({ highlited }) => `
        a:nth-of-type(${highlited + 1}) {
            color: #ef4444;
        }
    `}
    ${({ isAuth }) => !isAuth && `a { visibility: hidden;}`}
  }
`;
