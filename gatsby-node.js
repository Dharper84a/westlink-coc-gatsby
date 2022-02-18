const { GraphQLString } = require('gatsby/graphql')

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === 'ContentfulSiteMeta') {
    return {
      siteDescription: {
        type: GraphQLString,
        resolve: () => { return ' ' }
      }
    }
  }

  // by default return empty object
  return {}
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
