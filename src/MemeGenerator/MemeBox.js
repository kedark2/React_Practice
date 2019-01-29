import React from "react"

function MemeBox(props){
const memeButtonText = props.status.display ? "Hide Meme Generator": "Show Meme Generator"

	return(
	<div align="center">
		<h1 onClick={props.toogleMemeGenerator}>{memeButtonText}</h1>
		{props.status.display ?
		<div >
			<form className="meme-form" onSubmit={props.handleSubmit}>
				<input 
					type="text" 
					name="topText" 
					placeholder="Top Text"
					value={props.status.topText} 
					onChange={props.handleChange} /> <br/><br/>
				<input 
					type="text"
					name="bottomText" 
					placeholder="Bottom Text"
					value= {props.status.bottomText} 
					onChange={props.handleChange} />
				<button>Generate</button>
			</form>
			<div className="meme-container">
				<img src={props.status.randomImage} alt="memes"  />					<h2 className="top">{props.status.topText}</h2>
				<h2 className="bottom">{props.status.bottomText}</h2>
			</div>
		</div>: null}
	</div>
	)
}

export default MemeBox