import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)
  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h3>Convert more users.</h3>
          <p>Leverage machine learning and data analytics.</p>
          <Link className={styles.btn} to="/projects">Our Products</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`