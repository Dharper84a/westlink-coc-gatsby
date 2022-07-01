const path = require("path")
const {GraphQLString, GraphQLObjectType} = require('gatsby/graphql');


const richTextType = new GraphQLObjectType({
  name: 'content',
  fields: {
    raw: {
      type: GraphQLString,
    }
  }
})

exports.setFieldsOnGraphQLNodeType = ({type}) => {
  
  if(type.name === 'ContentfulSectionHeroLeft') {
    return {
      content: {
        type: richTextType,
        resolve: (source) => {
          return source?.content || "";
        }
      }
    }
  }

  return {}
}
// const { GraphQLString, GraphQLObjectType } = require("gatsby/graphql")

// exports.setFieldsOnGraphQLNodeType = ({ type }) => {
//   if (type.name === "ContentfulSiteMeta") {
//     return {
//       siteDescription: {
//         type: GraphQLString,
//         resolve: () => {
//           return " "
//         },
//       },
//     }
//   }

//   if (type.name === "ContentfulPageDefault") {
//     return {
//       linkedItems: {
//         type: GraphQLString,
//         resolve: () => {
//           return " "
//         },
//       },
//       socialImage: {
//         type: GraphQLString,
//         resolve: () => {
//           return " "
//         },
//       },
//     }
//   }
 
//   // if(type.name === "ContentfulPagePeople") {
//   //   return {
//   //     topContent: 
//   //     {
//   //       type: RichText,
//   //     },
//   //     resolve: () => {
//   //       return " "s
//   //     },
//   //   }
//   // }

//   // by default return empty object
//   return {}
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const defaultPageTemplate = path.resolve(
//     `src/templates/dynamic/DefaultTemplate/DefaultTemplate.js`
//   )
//   const defaultPageResult = await graphql(`
//     query {
//       allContentfulPageDefault {
//         edges {
//           node {
//             slug
//             title
//           }
//         }
//       }
//     }
//   `)

//   const peoplePageTemplate = path.resolve(
//     `src/templates/dynamic/PeopleTemplate/PeopleTemplate.js`
//   )
//   const peoplePageResult = await graphql(`
//     query {
//       allContentfulPagePeople {
//         edges {
//           node {
//             slug
//             title
//           }
//         }
//       }
//     }
//   `)

//   const eventPageTemplate = path.resolve(
//     `src/templates/dynamic/EventTemplate/EventTemplate.js`
//   );

//   const eventPageResult = await graphql(`
//     query {
//       allContentfulEvent {
//         edges {
//           node {
//             title
//             slug
//           }
//         }
//       }
//     }
//   `);

//   defaultPageResult.data.allContentfulPageDefault.edges.forEach(edge => {
//     createPage({
//       path: `${edge.node.slug}`,
//       component: defaultPageTemplate,
//       context: {
//         title: edge.node.title,
//         slug: edge.node.slug,
//       },
//     })
//   })

//   peoplePageResult.data.allContentfulPagePeople.edges.forEach(edge => {
//     createPage({
//       path: `${edge.node.slug}`,
//       component: peoplePageTemplate,
//       context: {
//         title: edge.node.title,
//         slug: edge.node.slug,
//       },
//     })
//   })

//   eventPageResult.data.allContentfulEvent.edges.forEach(edge => {
//     createPage({
//       path: `event/${edge.node.slug}`,
//       component: eventPageTemplate,
//       context: {
//         title: edge.node.title,
//         slug: edge.node.slug,
//       },
//     })
//   })
// }