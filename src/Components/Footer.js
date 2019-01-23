import React from "react";
import "./ToDoList.css";

function Footer(){
	  const date = new Date();
      const hours = date.getHours();
      let timeOfDay;
      const styles ={
        fontSize: 30
      }

      if(hours<12){
        timeOfDay = 'Morning';
        styles.color = "red";


      }else if(hours>= 12 && hours <17){
        timeOfDay="afternoon";
        styles.color = "blue";

      }else{
        timeOfDay="night";
        styles.color ="black"
      }

	return(
		<div className="footer">
		    <h1 style={styles}>Good {timeOfDay} Fellows! </h1>
		    <h3> Current Date and Time is {Date()} </h3>
		</div>
	);
}

export default Footer;