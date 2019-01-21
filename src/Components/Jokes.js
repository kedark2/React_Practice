import React from "react";

function Jokes(props){

	return (
		<div>
			<p style={{display: !props.ques && "none"}}>Question: {props.ques}</p>
			<p>Punch: {props.punch}</p>
		</div>
		)

}

export default Jokes;