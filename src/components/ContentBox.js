import styles from "./ContentBox.module.css";
function ContentBox({ createdAt, title, part, location, img }) {
	// console.log(createdAt.toLocalString("ko").slice(0, 12));
	return (
		<div className={styles.contentBox}>
			<img
				src={`/assets/${img[0]}`}
				alt={img[0].split(".")[0]}
				width={149}
				height={89}
				style={{
					borderRadius: "7px",
					border: "1px solid rgba(128, 128, 128, 0.7)",
				}}
			/>
			<div className={styles.contentBox__div1}>
				<h3>{title}</h3>
				<div className={styles.contentBox__div2}>
					<span>{location}</span>
					<span>
						{createdAt
							.toLocaleString("ko")
							.slice(0, 12)
							.replaceAll(". ", "/")
							.replace(".", "")}
					</span>
				</div>
				<strong>파트: {part}</strong>
			</div>
		</div>
	);
}
export default ContentBox;
