import React from "react"
import { Link } from "react-router-dom"
import Contacts from "./randomUsers.json"
import "./Home.css"

let person = Contacts.map(user => (
  <>
    <Link to={"/user/" + user.id} key={"user-link=" + user.id}>
      <img src={user.picture.thumbnail} alt="" />
      <p className="names">
        {toTitleCase(user.name.first)} {toTitleCase(user.name.last)}
      </p>
    </Link>
    <hr />
  </>
))

function toTitleCase(string) {
  let text = string.toLowerCase().split(" ")
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i][0].toUpperCase() + text[i].slice(1)
  }
  return text.join(" ")
}

function Home(props) {
  return (
    <>
      <div className="grid">
        <h2>My Peeps</h2>
        <div>{person}</div>
      </div>
    </>
  )
}

export default Home
