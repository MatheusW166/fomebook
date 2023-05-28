import ResetStyles from "./styles/reset.styles.js";
import GlobalStyles from "./styles/global.styles.js";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes.js";
import UserProvider from "./context/user.context.js";

function App() {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <UserProvider>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
