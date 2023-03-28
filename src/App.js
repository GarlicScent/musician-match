// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseRoute from "./routes/BaseRoute";
import MainContent from "./components/MainContent";
import UserWroteContent from "./components/UserWroteContent";
import NewWriteForm from "./components/NewWriteForm";
import Detail from "./components/Detail";

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
						<Route path="write" element={<NewWriteForm />} />
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
							element={<UserWroteContent />}
						/>
					</Route>
					<Route path="/jobWriting" element={<BaseRoute />}>
						<Route path=":writingId" element={<Detail />}></Route>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
