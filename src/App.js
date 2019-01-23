import React from 'react';
import './App.css';
import ToDoList from "./Components/ToDoList.js";
import ContactCard from "./Components/ContactCard.js";
import Header from "./Components/Header.js";
import Leftbar from "./Components/LeftSideBar.js";
import Rightbar from "./Components/RightSidebar.js";
import Content from "./Components/Content.js";
import Footer from "./Components/Footer.js";

class App extends React.Component{
  render(){
    return (
      <div>

        <Header/>
          <div className="try-webpage-man">
            <Leftbar/>
            <Content/>
            <Rightbar/>
          </div>
        <Footer/>
      </div>
    )
  
  }
}
export default App;
