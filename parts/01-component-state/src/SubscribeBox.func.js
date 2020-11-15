import React, { useState } from 'react';
import useCounter from './useCounter';

// init, read, update
// share logic
//
function SubscribeBox() {
 	
	/*const [state, setState] = useState({
		subscribe: false,
		like: 0,
		dislike: 0
	});

	function handleSubscribe() {
		setState({
			...state,
			subscribe: !state.subscribe
		});
	}

	function handleLike(field) {
		setState( currentState => ({
			...state,
			[field]: currentState[field] + 1
		}));
	}

	function handleTrippleLike(field) {
		handleLike(field);
		handleLike(field);
		handleLike(field);
	}*/

	const [subscribe, setSubscribe] = useState(false);

	const [like, handleLike, handleTrippleLike] = useCounter(0);
	const [dislike, handleDislike] = useCounter(0);
	

  return (
    <div>
      <p>
        <button onClick={ () => setSubscribe(current => !current) }> 
					{ (subscribe) ? 'Subscribe' : 'Unsubscribe' }
        </button>
        <span>  </span>
      </p>
      <p>
        <button onClick={ handleLike }> Like </button>
        <span> { like } </span>
      </p>
      <p>
        <button onClick={ handleLike }> Dislike </button>
        <span> { dislike} </span>
      </p>
      <p>
        <button onClick={ handleTrippleLike }> Triple Like</button>
        <span> { like } </span>
      </p>
    </div>
  );
} 

export default SubscribeBox
