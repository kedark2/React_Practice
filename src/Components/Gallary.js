import React from "react";
import ImagePost from "./ImagePost.js";
import photoCollection from "../DataCollection/PhotoCollection.js";

class PhotoGallary extends React.Component{

	render(){
		const photocc = photoCollection.map(photo => <ImagePost key={photo.id} imageUrl={photo.imageURL}/>)
	    let rows = [];
	    for (let i = 0; i < photocc.length; i++){
	      let rowID = `row${i}`
	      let cell = []
	      for (let idx = 0; idx < photocc.length; idx++){
	        let cellID = `cell${i}-${idx}`
	        cell.push(<td key={cellID} id={cellID}>{photocc[idx]}</td>)
	      }
	      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
	    }
		return(
			<div>
			<div>
				<table>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
			</div>
		)
	}
	
}


export default PhotoGallary;