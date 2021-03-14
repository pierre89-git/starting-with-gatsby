import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const title = "Gatsby"

export default function Home() {
  return (
    <div style={{ color: "palegoldenrod", fontSize: ".8rem" }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="About Gastby" />
      <h1>Hello {title}</h1>
      <p>What ...</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
