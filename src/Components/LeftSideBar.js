import React from "react";
import "./ToDoList.css"
import ToDoList from "./ToDoList.js";
import ToDoCollection from "../DataCollection/ToDoCollection.js";

class LeftSidebar extends React.Component{
	render(){
		const list = ToDoCollection.map( todo => <ToDoList item={todo}/>);
		return(
			<div className="leftSidebar">
				<div className="todoList">
		       		{list}
		        </div>
			</div>
		);
	}
}
export default LeftSidebar;