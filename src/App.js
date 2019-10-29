import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
import "./randomUsers.json"
import Home from "./Home"
import User from "./User"
import Contacts from "./randomUsers.json"

// let id = Contacts.map(user => user.id)

function App(props) {

 let id = props.match
 
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={User}/>
      </div>
    </Router>
  )
}

export default App
