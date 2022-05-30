import axios from "axios";
import React from "react";

function App() {
	const [data, setData] = React.useState();
	const url = "agile-oasis-32496.herokuapp.com";

	const GetData = () => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	};
	return (
		<div>
			<div>ここに処理を書いていきます</div>
			{data ? (
				<div>{data.Hello}</div>
			) : (
				<button onClick={GetData} className="button">データを所得</button>
			)}
		</div>
	);
}

export default App;
