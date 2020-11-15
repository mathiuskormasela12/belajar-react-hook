/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import MyClass from "./MyClass";
import MyFunc from "./MyFunc";
import NewsFeed from "./NewsFeed";

function App() {
		
		const [state, setState] = useState(true);
		
    return (
    <Layout>
			<button onClick={ () => setState(current => !current)}>Hide</button>
			{/*{ state && <MyClass/> }*/}
			{/*{ state && <MyFunc />}*/}
			<NewsFeed />
    </Layout>
  );
}

export default App;
