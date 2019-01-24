import React from "react";
import  "./ToDoList.css";


class ToDoList extends React.Component{

	render(){
		const cStyle ={
			color: "red"
		}
		return(
			<div className="checklist">
				<input type="checkbox" 
				checked= {this.props.item.completed} 
				onChange={() => this.props.handleChange(this.props.item.id)}/> 
				<p style= {this.props.item.completed ? cStyle:null}>{this.props.item.task} </p>
			</div>

		);

	}
}
export default ToDoList;