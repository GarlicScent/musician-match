//https://betterprogramming.pub/create-your-own-markdown-parser-bffb392a06db
//parser를 만들어보자!

function PaintForm({ data: { title, postContent } }) {
	return (
		<div
			style={{
				width: "100%",
				paddingTop: "60px",
				paddingBottom: "70px",
			}}
		>
			{title && <h1>{title}</h1>}
			{postContent && <p style={{ textAlign: "start" }}>{postContent}</p>}
		</div>
	);
}
export default PaintForm;
