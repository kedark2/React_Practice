import React from "react";
import "./ToDoList.css";
import ContactCard from "./ContactCard.js";
import contactsData from "../DataCollection/ContactCollection.js";
 
function RightSidebar(){
	const contacts = contactsData.map(contact => <ContactCard key={contact.id} url={contact.photoUrl} name={contact.name} phone={contact.phone} email={contact.email}/> );
	
	return(
		<div className="rightSidebar">
			<div className="contact-card">
				<h1>Contacts</h1>
	          	{contacts}
	        </div>
		</div>
	);
}

export default RightSidebar;