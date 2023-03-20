import styles from "./BottomNavbar.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as MessageIcon } from "../icons/message.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as WriteIcon } from "../icons/write.svg";

function BottomNavbar() {
	return (
		<nav className={styles.NavBottom}>
			<Link to={"/"}>
				<HomeIcon />
			</Link>
			<Link to={"/search"}>
				<SearchIcon />
			</Link>
			<Link to={"/write"}>
				<WriteIcon />
			</Link>
			<Link to={"/message"}>
				<MessageIcon />
			</Link>
			<Link to={"/user-profile"}>
				<span>My Icon</span>
			</Link>
			{/* react-router-dom으로 링크를 걸면되겠다. 이 부분은 기억이 잘 안나는데.. 일단.. 찾아보고 만들자. 근데 내용물 컴포넌트는 작성하는 것을 만들고 백을 다뤄야될 것 같은데?? */}
		</nav>
	);
}

export default BottomNavbar;
