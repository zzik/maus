import React from "react"
import { Featured, Forum, Hero } from "../components"

const MainLayout = () => {
  return (
    <div className="content">
      <Hero />
      <Forum />
      <Featured />
    </div>
  )
}

export default MainLayout
