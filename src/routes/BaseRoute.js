import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";
import TopNavbar from "../components/TopNavbar";

function BaseRoute() {
	return (
		<>
			<TopNavbar />
			<Outlet />
			<BottomNavbar />
		</>
	);
}
export default BaseRoute;
