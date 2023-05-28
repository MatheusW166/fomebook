import { useParams } from "react-router-dom";
import Header from "../components/Header.js";
import { FollowButtonStyled, MainStyled, TitleH3Styled } from "../styled.js";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../context/user.context.js";
import Profile from "../components/Profile.js";
import CreatePost from "../components/CreatePost.js";
import Post from "../components/Post.js";

const data = {
  followersCount: 265,
  followingCount: 132,
  name: "Comedor 2000",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at quam sed quam cursus accumsan. Praesent rhoncus elementum eros eu pretium.",
  photoUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8RBMDAfdzL1nKJXlbEU3HrC2W762sLvyRA&usqp=CAU",
};

const post = {
  userName: data.name,
  userPhotoUrl: data.photoUrl,
  photoUrl:
    "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ipsum non euismod mattis. Curabitur aliquet justo eget turpis posuere vehicula. Donec luctus mi sed dui semper scelerisque. Praesent tincidunt lorem a orci vulputate, in commodo justo fermentum.",
  createdAt: "12/04/2023",
  likesCount: 132,
  isLiked: false,
};

export default function UsersProfile() {
  const { user } = useContext(UserContext);
  const { userId } = useParams();
  const isProfileOwner = user?.id === userId;

  return (
    <>
      <Header highlited={isProfileOwner && 1} />
      <MainCustom>
        <section>
          <Profile {...data}>
            {isProfileOwner && <FollowButtonStyled>Seguir</FollowButtonStyled>}
          </Profile>
          <CreatePost />
        </section>
        <section>
          <TitleH3Styled>Publicações de {data.name}</TitleH3Styled>
          <PostsListStyled>
            <li>
              <Post {...post} />
            </li>
            <li>
              <Post {...post} />
            </li>
          </PostsListStyled>
        </section>
      </MainCustom>
    </>
  );
}

const MainCustom = styled(MainStyled)`
  justify-content: start;
  align-items: stretch;
  gap: 48px;
`;

const PostsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;
