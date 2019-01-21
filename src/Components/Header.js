import React from "react";
import "./ToDoList.css";
import LeftSideBar from "./LeftSideBar.js";

function Header(){
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
		<div className = "header">
		    <h1 style={styles}>Good {timeOfDay} Fellows! </h1>
		    <h3> Current Date and Time is {Date()} </h3>

		</div>
	);	

}

export default Header;