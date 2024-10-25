import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);
  const [records, setRecords] = useState([]);

  const onChangeTitle = event => setTitle(event.target.value);
  const onChangeTime = event => setTime(event.target.value);
  const onClickAdd = () => {
    const newRecords = [...records, {title, time}];
    setRecords(newRecords);
    setTitle("");
    setTime(0);
  }

  return <>
    <h1>学習記録一覧</h1>
    <p>
      学習内容
      <input type="text" value={title} onChange={onChangeTitle} />
    </p>
    <p>
      学習時間
      <input type="number" value={time} onChange={onChangeTime} />
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
  </>;
}

export default App;
