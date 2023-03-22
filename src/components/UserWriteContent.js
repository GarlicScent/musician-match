import ContentBox from "./ContentBox";
import styles from "./UserWriteContent.module.css";
function UserWriteContent() {
	const fakeData = [
		{
			id: 0,
			createdAt: new Date(),
			img: ["12.jpg", "34.jpeg", "5.jpeg", "6.jpeg"],
			title: "첫번째",
			main: "alskdjflkajsd;lkf 길게 함께 하실 가족 같은분 구인해요~ 함께 세상에 저희 목소리를 들려주어 보아요 ♡",
			genre: "락 / 메탈",
			part: "보컬",
			cellNo: "010-2742-2929",
			location: "서울",
			address: "강남구 지하 2층 음악 연습실.",
			soundCloudUrl: "https://hehe.com",
		},
		{
			id: 1,
			createdAt: new Date(),
			img: ["12.jpg", "34.jpeg", "5.jpeg", "6.jpeg"],
			title: "첫번째",
			main: "alskdjflkajsd;lkf 길게 함께 하실 가족 같은분 구인해요~ 함께 세상에 저희 목소리를 들려주어 보아요 ♡",
			genre: "락 / 메탈",
			part: "보컬",
			cellNo: "010-2742-2929",
			location: "서울",
			address: "강남구 지하 2층 음악 연습실.",
			soundCloudUrl: "https://hehe.com",
		},
		{
			id: 3,
			createdAt: new Date(),
			img: ["12.jpg", "34.jpeg", "5.jpeg", "6.jpeg"],
			title: "첫번째",
			main: "alskdjflkajsd;lkf 길게 함께 하실 가족 같은분 구인해요~ 함께 세상에 저희 목소리를 들려주어 보아요 ♡",
			genre: "락 / 메탈",
			part: "보컬",
			cellNo: "010-2742-2929",
			location: "서울",
			address: "강남구 지하 2층 음악 연습실.",
			soundCloudUrl: "https://hehe.com",
		},
	];
	return (
		<div className={styles.userWroteContentBox}>
			{fakeData &&
				fakeData.map((v) => (
					<ContentBox
						key={v.id}
						createdAt={v.createdAt}
						title={v.title}
						part={v.part}
						location={v.location}
						img={v.img}
					/>
				))}
		</div>
	);
}
export default UserWriteContent;
