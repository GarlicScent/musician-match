import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../logo.svg";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import styles from "./TopNavbar.module.css";

function TopNavbar() {
	return (
		<div className={styles.logo}>
			<Link to={"/"}>
				<HomeIcon />
				{/* <LogoIcon /> */}
			</Link>
			<Link to={"/search"}>
				<LogoIcon />
			</Link>
		</div>
	);
}

export default TopNavbar;
