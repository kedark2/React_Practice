import React from "react";
import "./ToDoList.css";
import ContactCard from "./ContactCard.js";
import ToDoList from "./ToDoList.js";
import Jokes from "./Jokes.js";
import jokesCollection from "../DataCollection/JokesCollection.js";


function Content(){
	 const testJoke = jokesCollection.map(jokes => <Jokes ques={jokes.question} punch={jokes.punch}/>)

	return (
		<div className="content">
			<div className="jokes">
				{testJoke}
			</div>
		</div>

		)
}

export default Content;