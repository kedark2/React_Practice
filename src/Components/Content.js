import React from "react";
import "./ToDoList.css";
import ContactCard from "./ContactCard.js";
import ToDoList from "./ToDoList.js";
import Jokes from "./Jokes.js";


function Content(){
	const question = ["Why did the cookie go to the hospital?","Why did Johnny throw the clock out of the window?","What did the policeman say to his belly button?", "What do you call a fake noodle?", "What did one toilet say to the other toilet?"];
    const punches = ["Because he felt crummy","Because he wanted to see time fly!", "You're under a vest! ","An impasta ", "You look flushed"];

	return (
		<div className="content">
	
        <Jokes ques={question[0]} punch={punches[0]}/>
        <Jokes ques={question[1]} punch={punches[1]}/>
        <Jokes ques={question[2]} punch={punches[2]}/>
        <Jokes ques={question[3]} punch={punches[3]}/>
        <Jokes ques={question[4]} punch={punches[4]}/>

		</div>

		)
}

export default Content;