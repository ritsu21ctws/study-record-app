import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const [totalTime, setTotalTime] = useState(0);

  const onChangeTitle = event => setTitle(event.target.value);
  const onChangeTime = event => setTime(event.target.value);
  const onClickAdd = () => {
    if (title === "" || time === "" || time === 0) {
      setError("入力されていない項目があります");
      return;
    }

    const newRecords = [...records, {title, time}];
    setRecords(newRecords);

    // 合計時間の計算
    const newTotalTime = newRecords.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.time), 0);
    setTotalTime(newTotalTime);

    // 初期化
    setTitle("");
    setTime(0);
    setError("");
  }

  return <>
    <h1>学習記録一覧</h1>
    <p>
      学習内容
      <input type="text" value={title} onChange={onChangeTitle} />
    </p>
    <p>
      学習時間
      <input type="number" min="0" value={time} onChange={onChangeTime} />
      時間
    </p>
    <p>入力されている学習内容：{title}</p>
    <p>入力されている時間：{time}時間</p>
    <ul>
      {records.map((record) => (
        <li key={record.title}>
          {`${record.title} ${record.time}時間`}
        </li>
      ) )}
    </ul>
    <button onClick={onClickAdd}>登録</button>
    {error !== "" && <p>{error}</p>}
    <p>合計時間：{totalTime} / 1000 (h)</p>
  </>;
}

export default App;
