import { useParams } from "react-router-dom";
import Header from "../components/Header.js";
import { MainStyled, TitleH3Styled } from "../styled.js";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user.context.js";
import Profile from "../components/Profile.js";
import CreatePost from "../components/CreatePost.js";
import { getUserById } from "../services/user.services.js";
import { getUserPosts } from "../services/post.services.js";
import Post from "../components/Post.js";
import FollowingStats from "../components/FollowingStats.js";

function getPubTitle(isProfileOwner, userName) {
  return isProfileOwner ? "Suas publicações" : `Publicações de ${userName}`;
}

export default function UsersProfile() {
  const { user: loggedUser } = useContext(UserContext);
  const { userId: userProfileId } = useParams();
  const isProfileOwner = loggedUser?.id === userProfileId;
  const [userProfile, setUserProfile] = useState();
  const [userPosts, setUserPosts] = useState();

  useEffect(() => {
    if (!userProfileId) {
      return;
    }
    getUserById({ userId: userProfileId })
      .then(setUserProfile)
      .catch(console.log);
    getUserPosts({ userId: userProfileId })
      .then(setUserPosts)
      .catch(console.log);
  }, [userProfileId]);

  function onPostSubmit(newPost) {
    if (!newPost?.id) return;
    getUserPosts({ userId: userProfileId })
      .then(setUserPosts)
      .catch(console.log);
  }

  return (
    <>
      <Header highlited={isProfileOwner ? 0 : -1} />
      <MainCustom isProfileOwner={isProfileOwner}>
        <section>
          <Profile
            name={userProfile?.name}
            bio={userProfile?.bio}
            photoUrl={userProfile?.photo}
            followersCount={userProfile?.followersCount}
            followingCount={userProfile?.followingCount}>
            {!isProfileOwner && (
              <FollowingStats
                afterFollow={() => {
                  getUserById({ userId: userProfileId })
                    .then(setUserProfile)
                    .catch(console.log);
                }}
                profileId={userProfileId}
              />
            )}
          </Profile>
          {isProfileOwner && <CreatePost onPostSubmit={onPostSubmit} />}
        </section>
        <section>
          <TitleH3Styled>
            {getPubTitle(isProfileOwner, userProfile?.name)}
          </TitleH3Styled>
          <PostsListStyled>
            {userPosts?.map((post) => (
              <li key={post.id}>
                <Post
                  userName={post.userName}
                  userPhotoUrl={post.userPhoto}
                  photoUrl={post.photo}
                  createdAt={post.createdAt}
                  description={post.description}
                  likesCount={post.likesCount}
                />
              </li>
            ))}
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

  section:first-of-type {
    ${({ isProfileOwner }) =>
      !isProfileOwner &&
      `
      div:first-child {
        border-radius: 24px;
      }
    `}
  }
`;

const PostsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;
