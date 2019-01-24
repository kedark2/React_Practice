import React from "react";
import App from "./App.js";

class Login extends React.Component{
	
	constructor(){
		super()
		this.state={
			username: "admin",
			password: "admin",
			display:true,
			message:"",

		}
		this.onChangeHandler= this.onChangeHandler.bind(this)
		this.loginHandler = this.loginHandler.bind(this)
	}
	onChangeHandler(event){
		const {name, value} = event.target
		this.setState({
			[name] : value	
		})
	}
	loginHandler(){
		if(this.state.username===this.state.password){
			this.setState({
				display:false,
				message:"correct"

			})
		}else{
			this.setState({
				message:"Credential incorrect. Please Try again"
			})
		}
	}
	render(){
		let displayMessage = this.state.display ? null: this.state.message
		return(
			<div>
			{this.state.display ? 
				<div align = "center">
				<form >
					Username : <input 
						type="text" 
						name="username" 
						onChange={this.onChangeHandler}/>
					<br/><br/>
					Password : <input 
						type="password"
						name="password"
						onChange={this.onChangeHandler}/>
					<br/><br/>
				</form>
				<h1>{this.state.message} </h1>

				<button onClick={this.loginHandler}>Login</button>

				</div>: <App/> }
			</div>
		)
	}

}

export default Login;