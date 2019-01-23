import React from "react";

function ContactCard(props){
	console.log(props);
	return(
		<div className="contact-card">
			<img src={require(`${props.url}`)} height="100" width="100"/>
			<h3>{props.name}</h3>
			<p>{props.phone} </p>
			<p>{props.email}</p>

		</div>
	)
}

export default ContactCard;

