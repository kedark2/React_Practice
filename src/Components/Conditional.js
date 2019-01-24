import React from "react"

class Conditional extends React.Component{
	constructor(){
		super()
		this.state={
			login: "check",
			isLoggedIn: true,
			firstName: "Ram",
			lastName: "kanel",
		}
		this.loginHandler = this.loginHandler.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.checkLogin = this.checkLogin.bind(this)
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

	checkLogin(){
		if(this.state.firstName===this.state.lastName){
			this.setState({
				login: "correct"
			})			
		}else{ this.setState({
			login:"Incorrect"
		})}
	}
		
	render(){
		let buttonText = this.state.isLoggedIn ? "Log out" : "Log In"
		let displayText = this.state.isLoggedIn ? "Logged In" : "Logged Out"
		return (
				<div>
				<form>
					<input 
						type="text" 
						value={this.state.firstName}
						name="firstName" 
						placeholder="First Name" 
						onChange={this.handleChange}/>
					<br/>
					<input 
						type="password"
						value={this.state.lastName}
						name="lastName" 
						placeholder="Last Name" 
						onChange={this.handleChange} />
				</form>
				<h1>You are {this.state.login} {displayText} {this.state.firstName} {this.state.lastName}</h1>
					<button onClick={this.checkLogin}>{buttonText}</button>
				</div>
			)
	}
}

export default Conditional;