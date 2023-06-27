import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes.js";
import UserProvider from "./context/user.context.js";
import { QueryCache, QueryClientProvider } from "react-query";

const queryClient = new QueryCache();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<UserProvider>
				<BrowserRouter>
					<MyRoutes />
				</BrowserRouter>
			</UserProvider>
		</QueryClientProvider>
	);
}

export default App;
