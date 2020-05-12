import React, { useState, useEffect } from "react"

import Layout from "../../components/Layout/Layout"


const testPage = ({ pageContext }) => {
  const data = pageContext.blog

  return (
    <Layout color="black">
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <p style={{ color: "black" }}>{data.Title}</p>
        <p style={{ color: "black" }}>{data.Description}</p>
      </div>
    </Layout>
  )
}

export default testPage