import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import "./randomUsers.json"
import Home from "./Home"
import User from "./User"

function App(props) {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={User} />
      </div>
    </Router>
  )
}

export default App
