import React, { useState, useEffect } from "react"
import Images from "../../Common/Theme/Images"
import Label from "../../components/Label/Label"
import Layout from "../../components/Layout/Layout"
import { Link } from "gatsby"
import "./SearchScreenStyle.css"

const SearchScreen = ({props,location}) => {
  const style = {
    titleContainer: {
      color: `black`,
      fontWeight: "bold",
      marginTop:'10px'
    },
    container: {
      width: "80%",
      margin: "auto",
      marginBottom: "10px",
      marginTop: "10px",
    },
  
  }

   const initialValue = []
   const [Item, setdataValue] = useState(initialValue)
   useEffect(() => {
     setdataValue(location.state.dataObj)
   }, [])

 
  return (
    <Layout color="black">
      {/* <div style={style.mainWrapper}> */}
        {/* <div> */}
        <div style={style.container}>
          {Item?.map(item => (
            <div className="cardRow">
              <div style={{ flex: 0.2 }}>
                <img src={Images.banner} />
              </div>

              <div
                style={{
                  flex: 0.7,
                  padding: "10px 20px",
                }}
              >
                <Link to="/BlogPage/BlogPage" state={{ dataObj: item }}>
                  <h4 style={{ color: "black" }}>{item?.Title}</h4>
                  <p style={style.titleContainer}>{item?.Description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </Layout>
  )
}

export default SearchScreen
