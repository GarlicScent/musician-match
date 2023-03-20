// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Write from "./routes/Write";
import Message from "./routes/Message";
import UserProfile from "./routes/UserProfile";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/write" element={<Write />} />
					<Route path="/message" element={<Message />} />
					<Route path="/user-profile" element={<UserProfile />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
