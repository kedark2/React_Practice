import React from "react"
import Login from "../Login.js";

class Conditional extends React.Component{
	constructor(){
		super()
		this.state={
			isLoggedIn: true,

		}
		this.loginHandler = this.loginHandler.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	//toggling the state of login
	loginHandler(){
		this.setState(prevState=>{
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})
	}

	//handling the change in textbox
	handleChange(event){
		this.setState({
			[event.target.name] : event.target.value  
		})
	}

	render(){
		let buttonText = this.state.isLoggedIn ? "Log out" : "Log In"
		let displayText = this.state.isLoggedIn ? "Logged In" : "Logged Out"
		return (
				<div>
					{this.state.isLoggedIn ?
					<div>
						<h1>You are {this.state.login} {displayText} {this.state.firstName} {this.state.lastName}</h1>
						<button onClick={this.loginHandler}>{buttonText}</button>
					</div>: <Login/>
					}
				</div>	
			)
	}
}

export default Conditional;