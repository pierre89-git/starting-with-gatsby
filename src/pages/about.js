import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: "palegoldenrod", fontSize: "2rem" }}>
      <Header headerText="About Gastby"/>
      <Header headerText="It's pretty cool"/>

      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
