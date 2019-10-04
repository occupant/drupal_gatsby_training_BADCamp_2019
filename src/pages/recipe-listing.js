import React from "react"
import {graphql} from "gatsby"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import RecipeTeaser from "../components/recipe-teaser.js"
import SEO from "../components/seo"


const RecipeListingPage = ({ data }) => (
  <Layout>
    <SEO title="Recipes" />
    <h2>Recipe Listing Page</h2>
    { data.allNodeRecipe.edges.map((recipe) => (
      <RecipeTeaser
        recipeSlug={recipe.node.fields.slug}
        key={recipe.node.id}
        //imgSrc={recipe.node.relationships.field_image.uri.url}
        recipeDate={recipe.node.created}
        recipeTitle={recipe.node.title}
        recipeSummary={recipe.node.field_summary.value}
        recipeImg={recipe.node.relationships.field_image.localFile.childImageSharp.fixed}
    />
)) }
  </Layout>
)

export const query = graphql`
{
  allNodeRecipe {
    edges {
      node {
        id
        title
        fields {
          slug
        }
        created(formatString: "MMMM Do, YYYY")
        field_summary {
          value
        }
        path {
          alias
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fixed(width: 400, height: 200) {
               ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
}
`
export default RecipeListingPage
