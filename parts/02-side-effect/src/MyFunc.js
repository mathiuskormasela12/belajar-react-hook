import React, { useState, useEffect } from 'react';
function MyFunc() {
		console.log('constructor');

		const [count, setCount] = useState(0);

		console.log('render');

		function handleCount() {
			setCount(currentState => currentState + 1);
		}

		// componentDidMount
		useEffect(() => {
			console.log('componentDidMount');
		});

		// componentDidUpdate
		useEffect(() => {
			if(count > 0) {
				console.log('componentDidUpdate');
			}
		}, [count]);

		// componentWillUnmount
		useEffect(() => {
			return () => {
				console.log('componentWillUnMount');
			}
		}, []);

    return (
    <div>
      <h1> Function Component </h1>
      <p>
        <button onClick={ handleCount }>Count </button>
     		{ count }
      </p>
    </div>
  );
}
export default MyFunc
