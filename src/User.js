import React from "react"
import Contacts from "./randomUsers.json"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./user.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCircle } from "@fortawesome/free-solid-svg-icons"

function toTitleCase(string) {
  let text = string.toLowerCase().split(" ")
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i][0].toUpperCase() + text[i].slice(1)
  }
  return text.join(" ")
}

function User(props) {
  const id = props.match.params.id
  const user = Contacts.find(user => user.id.toString() === id)

  return (
    <>
      <div className="title-card">
        <div className="img-block">
          <Link to="/">
            <h3>&laquo;----</h3>
          </Link>
          <img src={user.picture.large} alt={user.name.first} />
        </div>
        <ul>
          <li>
            {/* <FontAwesomeIcon icon={faCircle} /> */}
            Name: {toTitleCase(user.name.first)} {toTitleCase(user.name.last)}
          </li>
          <hr />
          <li>Email: {user.email}</li>
          <hr />
          <li>
            Phone: {user.phone}, Cell: {user.cell}
          </li>
          <hr />
          <li>
            Location: {toTitleCase(user.location.city)},{" "}
            {toTitleCase(user.location.state)}
          </li>
        </ul>
      </div>
    </>
  )
}

export default User
