import React from 'react';
import './App.css';
import Header from "./Components/Header.js";
import Leftbar from "./Components/LeftSideBar.js";
import Rightbar from "./Components/RightSidebar.js";
import Content from "./Components/Content.js";
import Footer from "./Components/Footer.js";
import Conditional from "./Components/Conditional.js";
import Login from "./Login.js";

class App extends React.Component{
  constructor(){
    super()
    this.state= {
      isLoading: true,
      character: {},
      isLoggedin: true,

    };
    this.loginHandler = this.loginHandler.bind(this);
  }
  componentDidMount(){
    //trying to fetch data from api, not working atm
    fetch("https://swapi.co/api/people/1")
      .then(response => response.jason())
      .then( result => {this.setState({character:result})})
  //setting timer when the loader should stop
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },500)
  }

  loginHandler(){
    this.setState(prevState=>{
      return{
        isLoggedin : !prevState.isLoggedin
      }
    })
  }

  render(){

    return (
      <div>
      {this.state.isLoggedin ?
        <div>
        {
          //condition for the loader to display
          this.state.isLoading ? <div className="loader"><img src= {require("./Components/img/loading.gif")} alt="Loader"/></div>:
          <div>
            <button onClick={this.loginHandler}>Log out</button>
            <Header/>
            <div className="try-webpage-man">
                <Leftbar/>
                <Content/>
                <Rightbar/>
            </div>
            <Footer/>
          </div>
        }
        </div>: <Login/>
      }
      </div>
    )
  
  }
}
export default App;
