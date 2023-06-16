import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes.js";
import UserProvider from "./context/user.context.js";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
