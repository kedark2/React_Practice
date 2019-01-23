import React from "react"

class Conditional extends React.Component{
	constructor(){
		super()
		this.state={
			login: "In",
			isLoggedIn: true
		}
		this.loginHandler = this.loginHandler.bind(this)
	}

	loginChecker(){

	}
	loginHandler(){
		this.setState(prevState=>{
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})

	}
		

	

	render(){
		let buttonText = this.state.isLoggedIn ? "Log out" : "Log In"
		let displayText = this.state.isLoggedIn ? "Logged In" : "Logged Out"
		return (
				<div>

				<h1>You are {displayText}</h1>
					<button onClick={this.loginHandler}>{buttonText}</button>
				</div>
			)
	}
}

export default Conditional;