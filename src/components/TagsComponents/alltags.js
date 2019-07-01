import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Tag from './tags'

const getAllTags = data => {
  let tags_list = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    node.frontmatter.tags.forEach(tag => {
      tags_list.push(tag)
    })
  })

  let clean_tag_list = []

  tags_list.map(
    tag => !clean_tag_list.includes(tag) && clean_tag_list.push(tag)
  )

  if(clean_tag_list.length > 20){
    clean_tag_list = clean_tag_list.slice(0,20)
  }

  return clean_tag_list
}

export default () => (
  <StaticQuery
    query={graphql`
      query allTags {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
          {
             getAllTags(data).map((tag,index)=>(
                 <Tag key={index} tag={tag}/>
             ))
          }
      </div>
    )}
  />
)
