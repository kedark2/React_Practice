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
				message:"correct"

			})
		}else{
			this.setState({
				display:false,
				message:"Credential incorrect"
			})
		}
	}
	render(){
		return(
			<div>
			{this.state.display ? 
				<form>
					<input 
						type="text" 
						value={this.state.username} name="username" 
						onChange={this.onChangeHandler}/>
					<br/><br/>
					<input 
						type="password"
						value={this.state.password}
						name="password"
						onChange={this.onChangeHandler}/>
					<br/><br/>
					<button onClick={this.loginHandler}>Login</button>
				</form>: <App/>}
				<h1>I am Logged {this.state.username} {this.state.password} {this.state.message}</h1>
			</div>
		)
	}

}

export default Login;