import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

const RecipeTeaser = ({recipeImg, recipeTitle, recipeDate, recipeSummary, recipeSlug}) => (
  <div style={{ display: `flex`, borderBottom: `1px solid #ddd`, marginBottom: `1.45rem`, paddingBottom: `1.45rem` }}>
    <Img style={{ flex: `1` }} fixed={recipeImg} />
    <div style={{ flex: `2`, paddingLeft: `1.45rem` }}>
      <Link to={ recipeSlug }>
        <h2 style={{ marginBottom: `0`, color: `rebeccapurple` }}>{ recipeTitle }</h2>
      </Link>
      <p><small>{ recipeDate }</small></p>
      <p>{ recipeSummary }</p>
    </div>
  </div>
)

export default RecipeTeaser
