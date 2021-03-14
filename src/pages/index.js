import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const title = "Gatsby"

export default function Home() {
  return (
   /*{ <div style={{ color: "palegoldenrod", fontSize: ".8rem" }}>}*/
      <div style={{margin:`3rem auto`, maxWidth: 600}}>
      <Header headerText="About Gastby" />
      <h1>Hello {title}</h1>
      <p>What ...</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <Link to="/contact/">Contact</Link>
    </div>
  )
}
