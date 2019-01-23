import React from "react";
import  "./ToDoList.css";


class ToDoList extends React.Component{
	render(){
		return(
			<div className="checklist">
				<input type="checkbox" checked= {this.props.item.completed}/> 
				<p >{this.props.item.task} </p>
			</div>

		);

	}
}
export default ToDoList;