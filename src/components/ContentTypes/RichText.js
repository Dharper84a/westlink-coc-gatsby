import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
// import slugify from '@sindresorhus/slugify'

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Bold = ({children}) => <span className="bold">{children}</span>
const Text = ({children}) => <p>{children}</p>

const EmbeddedAsset = ({node}) => {
  return <pre><code>{JSON.stringify(node, null, 2)}</code></pre>
}

// const options ={
//   renderMark: {
//     [MARKS.BOLD]: text => <Bold>{text}</Bold>
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,

//     [BLOCKS.EMBEDDED_ASSET]: node => <EmbeddedAsset node={node} />,
//   }
// }

// renderRichText(node.bodyRichText, options);
// const createJumpLink = (children) => {
//   return (
//     <a
//       href={`#${slugify(children[0])}`}
//       className="
//         relative
//         before:md:content-['#']
//         before:absolute 
//         before:inset-x-hash 
//         before:text-md 
//         before:text-gray-300
//         hover:md:before:content-['#']
//         hover:before:text-brand-default"
//     >
//       {children}
//     </a>
//   )
// }

var entryLinks = [];

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => (
      <code>
        {text}
      </code>
    ),
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
      >
        {children}
      </a>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      return <span>{children}</span>
    },
    [BLOCKS.HEADING_1]: (node, children) => (
      <h2>
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2>
          {children}
        </h2>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3>
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4>
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5>
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6>
        {children}
      </h6>
    ),

    [BLOCKS.OL_LIST]: (node, children) => (
      <ol>{children}</ol>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul>{children}</ul>
    ),

    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li>{children}</li>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0].value === '') {
        return <br />
      } else {
        return <p>{children}</p>
      }
    },
    [BLOCKS.QUOTE]: (children) => (
      <blockquote>
        <>"{children.content[0].content[0].value}"</>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target

      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)}
          alt={description}
        />
      )
    },
  },
}

const ContentfulRichText = ({ richText }) => {

  

  const entryData = useStaticQuery(graphql`
    query entryLinks {
      allContentfulEntry {
        edges {
          node {
            ... on ContentfulHomepage {
              slug
              contentful_id
            }
            ... on ContentfulPage {
              slug
              contentful_id
            }
          }
        }
      }
    }
  `)
  
  React.useEffect(() => {
    console.log(entryData)
  }, [entryData])

  return <div>{renderRichText(richText, options)}</div>
}

ContentfulRichText.propTypes = {
  /** Contentful rich text */
  richText: PropTypes.any.isRequired,
}

export default ContentfulRichText