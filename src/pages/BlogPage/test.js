import React, { useState, useEffect } from "react"
// import styles from "./VerticalCardStyle.css"
import Images from "../../Common/Theme/Images"
import { Link } from "gatsby"
import Layout from "../../components/Layout/Layout"
import Label from "../../components/Label/Label"
import VerticalCard from "../../components/VerticalCard/VerticalCard"

const test = ({ props, location, pageContext }) => {
  // const data = pageContext.blog

  console.log("data in test from categor", pageContext)

  let styles = {
    excerpt: {
      color: "black",
      fontSize: "16px",
      zIndex: "20",
    },

    image: {
      // backgroundImage: url(Images.banner),
    },
  }

  // const initialValue = {}
  // const [data, setdataValue] = useState(initialValue)
  // useEffect(() => {
  //   // setdataValue(location.state.dataObj)
  //   setdataValue(pageContext)
  // }, [])

  return (
  
   <div><p>this is ssooocolc </p></div>
 
    )
}

export default test
