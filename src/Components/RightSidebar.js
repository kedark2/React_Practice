import React from "react";
import "./ToDoList.css";
import ContactCard from "./ContactCard.js";

function RightSidebar(){
	
	return(
		<div className="rightSidebar">
			<div className="contact-card">
	          <ContactCard name="Kedar paney" phone ="+917867654634" url="./apple.jpeg" email="something@gnal.com"/>
	          <ContactCard name="Raj sharma" phone ="+3588765674" url="./2.JPG" email="nothing@gnal.com"/>
	        </div>
		</div>
	);
}

export default RightSidebar;