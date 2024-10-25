import { useState } from "react";
import "./App.css";

function App() {
  const records = [
    { title: "勉強の記録1", time: 1},
    { title: "勉強の記録2", time: 3},
    { title: "勉強の記録3", time: 5}
  ];

  return <>
    <h1>学習記録一覧</h1>
    <p>
      学習内容
      <input type="text" />
    </p>
    <p>
      学習時間
      <input type="number" />
      時間
    </p>
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
