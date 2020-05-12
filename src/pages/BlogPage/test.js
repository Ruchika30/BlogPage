import React, { useState, useEffect } from "react"

import Layout from "../../components/Layout/Layout"


const test = ({ pageContext }) => {
  console.log("pageContext", pageContext)
  return (
    <Layout color="black">
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <p style={{color:'black'}}>{pageContext}</p>
      </div>
    </Layout>
  )
}

export default  test