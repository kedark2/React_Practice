import React, {Component} from "react";
import MemeBox from "./MemeBox.js";
import "./style.css";

class MemeGenerator extends Component{
	constructor(){
		super()
		this.state={
			topText: "",
			bottomText: "",
			randomImage:"http://i.imgflip.com/1bij.jpg",
			allMemeImgs:[],
			display: false,
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit= this.handleSubmit.bind(this)
		this.toogleMemeGenerator= this.toogleMemeGenerator.bind(this)
	}
	/*getting data from api
	*/
	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
		.then(response => response.json())
		.then(response=> {
			const {memes} = response.data
			this.setState({allMemeImgs: memes })
		})
	}
	/*handles the change of input box*/
	handleChange(event){
		const {name, value} = event.target
		this.setState({[name]: value})
	}
	/*generates random number and saves image of that numbered from allMemeImgs to randomImage*/
	handleSubmit(event){
		event.preventDefault()
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randomMemeImg = this.state.allMemeImgs[randNum].url
		this.setState({randomImage: randomMemeImg})
	}
	toogleMemeGenerator(){
		this.setState(prevState=>{
			return{
			display: !prevState.display
			}
		})
	}
	render(){
		return(
			<div>
				<MemeBox 
					status={this.state} 
					handleChange={this.handleChange} 
					handleSubmit={this.handleSubmit}
					toogleMemeGenerator={this.toogleMemeGenerator}/>
			</div>
		);
	}

}



export default MemeGenerator;