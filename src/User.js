import React from "react"
import Contacts from "./randomUsers.json"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

let peep = Contacts.map(user => (
  <Router>
    <Route to={"/user/" + user.id} key={"user-link=" + user.id}>
      <img src={user.picture.large} alt="" />
    </Route>
  </Router>
))

function User(props) {
  
 
  return <div>{peep}</div>
}

export default User
