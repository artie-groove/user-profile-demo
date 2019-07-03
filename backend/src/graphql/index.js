const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const isUniqueQuery = require('./check-uniqueness');

const schema = buildSchema(`
  type Query {
    isUnique(name: String!, value: String!): Boolean!,
  }
`);

const root = {
	isUnique: isUniqueQuery,
};

module.exports = graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
});
