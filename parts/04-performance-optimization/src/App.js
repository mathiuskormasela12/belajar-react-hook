import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout";

function App() {
  const [count, setCount] = useState(0);
  
  console.log("Parent Component Rendered");
  return (
    <Layout>
      <p>
        <i> -- Parent Component -- </i>
      </p>
      <button onClick={() => setCount(c => c + 1)}>Like {count} </button>

      <MemoChildComponent
        title="Hello"
				mahasiswa={{
					nama: 'Mathius'
				}}
      />
    </Layout>
  );
}

// Hanya untuk string dan integer
const MemoChildComponent = React.memo(ChildComponent, compare);

function compare(prevProps, nextProps) {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

function ChildComponent({ title, mahasiswa: { nama } }) {
  sleep(2000) // heavy process simulation
  console.log("Child Component Rendered");
  return (
    <>
      <p>
        <br />
        <i> -- Child Component -- </i>
      </p>
      <h1>
        {" "}
	  { title } { nama }
      </h1>
      <button> Like </button>
    </>
  );
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export default App;
