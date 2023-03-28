import { useState } from "react";
import styles from "./NewWriteForm.module.css";
import PaintForm from "./PaintForm";
import Select from "./Select";

function NewWriteForm() {
	// https://reactrouter.com/en/main/guides/form-data
	// 위에 처럼 폼데이터들을 Object로 관리하여 전달해주면 좋지 않을까??...
	const [formData, setformData] = useState({ title: "test" });

	return (
		<div className={styles.showFormContent}>
			<form
				className={styles.formBox}
				onChange={(e) => {
					setformData({
						...formData,
						[e.target.name]: e.target.value,
					});
					console.log(formData);
				}}
			>
				<input type="text" placeholder="제목" name="title" />
				<div>
					<input type="file" accept="image/png" name="imgFile" />
				</div>

				<div className={styles.selectDiv}>
					<Select
						descEn={"part"}
						desc={"파트"}
						value={[
							"보컬",
							"기타",
							"드럼",
							"베이스",
							"키보드",
							"FX",
							"그 외.",
						]}
					/>

					<Select
						descEn={"genre"}
						desc={"장르"}
						value={["락 / 메탈", "그 외."]}
					/>

					<Select
						descEn={"location"}
						desc={"위치"}
						value={[
							"서울",
							"경기도",
							"인천",
							"광주",
							"대구",
							"부산",
							"그 외.",
						]}
					/>
				</div>
				<label>
					연락처:
					<input type={"tel"} name="cellNo" />
				</label>

				<label>
					sound cloud url:
					<input name="soundCloudUrl" type="url" />
				</label>
				<textarea
					name="postContent"
					rows={20}
					// cols={50}
					style={{ resize: "none" }}
				></textarea>
				<input
					type="submit"
					value="작성"
					onClick={(e) => e.preventDefault()}
				/>
			</form>
			<PaintForm data={formData} />
		</div>
	);
}

export default NewWriteForm;
