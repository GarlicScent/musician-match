import styles from "./MainContent.module.css";
function MainContent() {
	return (
		<>
			<div className={styles.mainContentBox}>
				하이
				<div
					style={{
						width: "400px",
						height: "400px",
						backgroundColor: "teal",
					}}
				/>
				<div
					style={{
						width: "400px",
						height: "400px",
						backgroundColor: "orange",
					}}
				/>
				<div
					style={{
						width: "400px",
						height: "400px",
						backgroundColor: "pink",
					}}
				/>
			</div>
		</>
	);
}
export default MainContent;
