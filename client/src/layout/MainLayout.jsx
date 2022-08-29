import React from "react"
import { /* Featured, */ Forum, Header, Hero } from "../components"

const MainLayout = () => {
  return (
    <div className="content">
      {/* <Header /> */}
      <Hero />
      <Forum />
      {/* <Featured />
      <Footer />  */}
    </div>
  )
}

export default MainLayout
