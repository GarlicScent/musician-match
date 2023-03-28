function Select({ descEn, desc, value }) {
	// console.log(value);
	return (
		<label>
			Choose {desc}:
			<select defaultValue={desc} name={descEn}>
				<option disabled={true} value={desc}>
					{desc}를 선택해주세요.
				</option>
				{value.map((v, i) => (
					<option value={v} key={i}>
						{v}
					</option>
				))}
			</select>
		</label>
	);
}

export default Select;
