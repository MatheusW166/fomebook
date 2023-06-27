import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/user.context.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import SearchUsers from "./pages/SearchUsers.js";
import UsersProfile from "./pages/UsersProfile.js";
import Following from "./pages/Followers.js";

export default function MyRoutes() {
	const { user } = useContext(UserContext);
	const isAuth = user !== null;
	const loggedUserRoute = `/users/${user?.id}`;

	return (
		<Routes>
			<Route
				path="/"
				element={isAuth ? <Navigate to={loggedUserRoute} /> : <SignIn />}
			/>
			<Route
				path="/signup"
				element={isAuth ? <Navigate to={loggedUserRoute} /> : <SignUp />}
			/>
			<Route path="/users/search" element={<SearchUsers />} />
			<Route path="/users/:userId" element={<UsersProfile />} />
			<Route path="/users/:userId/:followType" element={<Following />} />
		</Routes>
	);
}
