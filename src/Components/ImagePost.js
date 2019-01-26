import React from "react";


class ImagePost extends React.Component{
	constructor(props){
		super(props);
		this.state={
			like:0,
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState((prevLike)=>{
			return{
				like : prevLike.like + 1
			}
		})

	}
	render(){
		return (
			<div>
				<img src= {require(`${this.props.imageUrl}`)} height="200px" width="200px" alt="imgpst"/>
				<p>{this.state.like} Likes </p>
				<button onClick={this.handleClick}>Like</button>
			</div>
		)
	}

}

export default ImagePost;