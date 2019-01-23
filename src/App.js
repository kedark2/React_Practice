import React from 'react';
import './App.css';
import ToDoList from "./Components/ToDoList.js";
import ContactCard from "./Components/ContactCard.js";
import Header from "./Components/Header.js";
import Leftbar from "./Components/LeftSideBar.js";
import Rightbar from "./Components/RightSidebar.js";
import Content from "./Components/Content.js";
import Footer from "./Components/Footer.js";
import Conditional from "./Components/Conditional.js";

class App extends React.Component{
  constructor(){
    super()
    this.state= {
      isLoading: true
    }
  }
  //Setting the time for the loader
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },500)
  }

  render(){

    return (

      <div>
      <Conditional/>
      {
        //condition for the loader to display
        this.state.isLoading ? <div className="loader"><img src= {require("./Components/img/loading.gif")} margin-left="auto" margin-right="auto" display="block"/></div>:
        <div>
          <Header/>
            <div className="try-webpage-man">
              <Leftbar/>
              <Content/>
              <Rightbar/>
            </div>
          <Footer/>
        </div>
      }</div>
    )
  
  }
}
export default App;
