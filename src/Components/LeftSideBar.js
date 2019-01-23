import React from "react";
import "./ToDoList.css"
import ToDoList from "./ToDoList.js";
import ToDoCollection from "../DataCollection/ToDoCollection.js";

class LeftSidebar extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0,
			todos: ToDoCollection
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleClick(){
		this.setState((prevCount)=> {
			return {
				count: prevCount.count + 1
			}
		})	
	}
	handleChange(id){
		this.setState(prevState=> {
			const updatedTodos = prevState.todos.map(todo=> {
				if (todo.id === id){
					todo.completed = !todo.completed
				}
				return todo;
			})
			return {
				todos: updatedTodos
			}
		})
	}
	render(){
		const list = this.state.todos.map( todo => <ToDoList key={todo.id} item={todo} handleChange={this.handleChange}/>);
		return(
			<div className="leftSidebar">
				<div className="todoList">
					<h1>Magic {this.state.count}</h1>
					<button onClick={this.handleClick}> Click Me To See Magic </button>
		       		{list}
		        </div>
			</div>
		);
	}
}
export default LeftSidebar;