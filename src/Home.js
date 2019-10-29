import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Contacts from "./randomUsers.json"

let unique_id = Contacts.map(user => user.id)

let person = Contacts.map(user => (
  <>
    <Link to={"/user/" + user.id} key={"user-link=" + user.id}>
      <p>
        <img src={user.picture.thumbnail} alt="" /> {user.name.first}{" "}
        {user.name.last}
      </p>
    </Link>
  </>
))

function Home(props) {
  
  return (
    <>
      <div>{person}</div>
    </>
  )
}

export default Home
