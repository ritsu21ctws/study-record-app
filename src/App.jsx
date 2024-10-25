import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);

  const records = [
    { title: "勉強の記録1", time: 1},
    { title: "勉強の記録2", time: 3},
    { title: "勉強の記録3", time: 5}
  ];

  const onChangeText = event => setText(event.target.value);
  const onChangeTime = event => setTime(event.target.value);

  return <>
    <h1>学習記録一覧</h1>
    <p>
      学習内容
      <input type="text" value={text} onChange={onChangeText} />
    </p>
    <p>
      学習時間
      <input type="number" value={time} onChange={onChangeTime} />
      時間
    </p>
    <p>入力されている学習内容：{text}</p>
    <p>入力されている時間：{time}時間</p>
    <ul>
      {records.map((record) => (
        <li key={record.title}>
          {`${record.title} ${record.time}時間`}
        </li>
      ) )}
    </ul>
  </>;
}

export default App;
