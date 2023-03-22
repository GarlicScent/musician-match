// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseRoute from "./routes/BaseRoute";
import MainContent from "./components/MainContent";
import UserWriteContent from "./components/UserWriteContent";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<BaseRoute />}>
						<Route path="" element={<MainContent />} />
						<Route
							path="search"
							element={
								<div style={{ paddingTop: "60px" }}>Write</div>
							}
						/>
						<Route
							path="write"
							element={
								<div style={{ paddingTop: "60px" }}>Write</div>
							}
						/>
						<Route
							path="message"
							element={
								<div style={{ paddingTop: "60px" }}>
									Message
								</div>
							}
						/>
						<Route
							path="user-profile"
							element={<UserWriteContent />}
						/>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
