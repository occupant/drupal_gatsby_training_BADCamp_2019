import React from "react"
//import { Link } from "gatsby"
import Img from "gatsby-image"
import {graphql} from "gatsby"

import Layout from "../components/layout"

const RecipePage = ({ data }) => (
  <Layout>
    <div>
      <h1 style={{ marginBottom: `0` }}>{data.nodeRecipe.title}</h1>
      <i><p className="publication-date">{data.nodeRecipe.created}</p></i>
      <Img fixed={data.nodeRecipe.relationships.field_image.localFile.childImageSharp.fixed} />
      <div class="details" style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1em 0',
      }}>
        <h2>Overview</h2>
        <span>Preparation time: {data.nodeRecipe.field_preparation_time}</span>
        <span>Cooking time: {data.nodeRecipe.field_cooking_time}</span>
        <span>Difficulty: {data.nodeRecipe.field_difficulty}</span>
        <span>Number of servings: {data.nodeRecipe.field_number_of_servings}</span>
      </div>
      <h2>Instructions</h2>
      <span dangerouslySetInnerHTML={{__html: data.nodeRecipe.field_recipe_instruction.processed}}></span>
    </div>
  </Layout>
)

export const query = graphql`
query($slug: String!) {
  nodeRecipe (fields: { slug: { eq: $slug } }) {
    fields {
      slug
    }
    title
    field_recipe_instruction {
      processed
    }
    field_difficulty
    field_ingredients
    field_cooking_time
    field_preparation_time
    field_number_of_servings
    relationships {
      field_image {
        localFile {
          childImageSharp {
            fixed(width: 960, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`

export default RecipePage
