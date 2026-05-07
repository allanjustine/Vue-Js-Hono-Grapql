import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String
  }

  type Query {
    users(limit: Int, offset: Int): [User!]!
    user(id: ID!): User
  }
`);
