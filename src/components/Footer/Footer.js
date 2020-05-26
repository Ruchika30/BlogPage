import React from "react"
import { Link } from "gatsby"


const footer = () => {
  let style = {
    text: {
      color: "#a5a9ad",
      fontFamily: "Arial",
      fontSize: 14,
    },
    footerItens: {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-evenly",
      marginLeft: "0px",
      color: "grey",
      fontFamily: "Arial",
      fontSize: 14,
      marginBottom: "0px",
    },
    footerContainer: {
      width: "80%",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      padding: "20px 0px",
      justifyContent: "space-between",
    },
  }
  return (
    <footer
      style={{
        background: "black",
        height: "80px",
        width: "100%",
      }}
    >
      <div style={style.footerContainer}>
        <div>
          <p style={style.text}>
            FTFP, by Avantika@2020, developed by TheViralAdvertising.com
          </p>
        </div>

        <div>
          {/* <ul style={style.footerItens}> */}
          <ul className="w-56 flex text-xs justify-around text-gray-400">
            <Link>
              <li>Latest Post</li>
            </Link>
              <a href="https://in.linkedin.com/in/avantika-sood-0b16a3a9">
                <li>Linkedin</li>
              </a>
            <a href="https://in.linkedin.com/in/avantika-sood-0b16a3a9">
              <li>Instagram</li>
             </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer
