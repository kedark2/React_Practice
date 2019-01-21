import React from "react";
import "./ToDoList.css"
import ToDoList from "./ToDoList.js";

function LeftSidebar(){
	
	return(
		<div className="leftSidebar">
			<div className="todoList">

	          <ToDoList/>
	          <ToDoList/>
	          <ToDoList/>
	          <ToDoList/>
	          <ToDoList/>
	        </div>

			
		</div>

		);
}

export default LeftSidebar;