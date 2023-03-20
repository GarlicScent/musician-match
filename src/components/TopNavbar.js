import { Link } from "react-router-dom";
import { ReactComponent as LogoIconnic } from "../logo.svg";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import styles from "./TopNavbar.module.css";

function TopNavbar() {
	return (
		<div className={styles.logo}>
			<Link to={"/"}>
				<HomeIcon />
			</Link>
			<Link to={"/search"}>
				<LogoIconnic />
			</Link>
		</div>
	);
}

export default TopNavbar;
