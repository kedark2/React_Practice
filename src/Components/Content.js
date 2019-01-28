import React from "react";
import "./ToDoList.css";
import Jokes from "./Jokes.js";
import jokesCollection from "../DataCollection/JokesCollection.js";
import Gallary from "./Gallary.js";
import MemeGenerator from "../MemeGenerator/MemeGenerator.js";

function Content(){
	 const testJoke = jokesCollection.map(jokes => <Jokes key={jokes.id} ques={jokes.question} punch={jokes.punch}/>)

	return (
		<div className="content">
			<div className="jokes">
				<MemeGenerator/>
				<Gallary/>
				{testJoke}
			</div>
		</div>

		)
}

export default Content;