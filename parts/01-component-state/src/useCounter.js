import React, { useState } from 'react';

function useCounter(defaultValue) {
	const [state, setState] = useState(defaultValue);

	function handleState() {
		setState(currentState => currentState + 1);
	}

	function handleTripple() {
		handleState();
		handleState();
		handleState();
	}

	return [
		state,
		handleState,
		handleTripple
	];
}

export default useCounter;
