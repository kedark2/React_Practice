import React, {Component} from "react";
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
		const memeButtonText = this.state.display ? "Hide Meme Generator": "Show Meme Generator"
		return(
			<div align="center">
			<h1 onClick={this.toogleMemeGenerator}>{memeButtonText}</h1>
			{this.state.display ?
			<div >
				<form className="meme-form" onSubmit={this.handleSubmit}>
					<input 
							type="text" 
							name="topText" 
							placeholder="Top Text"
							value={this.state.topText} 
							onChange={this.handleChange} /> <br/><br/>
					<input 
							type="text"
							name="bottomText" 
							placeholder="Bottom Text"
							value= {this.state.bottomText} 
							onChange={this.handleChange} />
					<button>Generate</button>
				</form>
				<div className="meme-container">
				<img src={this.state.randomImage} alt="memes"  />
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>
			</div>: null}
			</div>
		);
	}

}



export default MemeGenerator;