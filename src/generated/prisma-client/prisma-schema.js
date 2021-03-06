module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAuthorization {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Authorization {
  id: ID!
  user: User!
}

type AuthorizationConnection {
  pageInfo: PageInfo!
  edges: [AuthorizationEdge]!
  aggregate: AggregateAuthorization!
}

input AuthorizationCreateInput {
  user: UserCreateOneInput!
}

type AuthorizationEdge {
  node: Authorization!
  cursor: String!
}

enum AuthorizationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AuthorizationPreviousValues {
  id: ID!
}

type AuthorizationSubscriptionPayload {
  mutation: MutationType!
  node: Authorization
  updatedFields: [String!]
  previousValues: AuthorizationPreviousValues
}

input AuthorizationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthorizationWhereInput
  AND: [AuthorizationSubscriptionWhereInput!]
  OR: [AuthorizationSubscriptionWhereInput!]
  NOT: [AuthorizationSubscriptionWhereInput!]
}

input AuthorizationUpdateInput {
  user: UserUpdateOneRequiredInput
}

input AuthorizationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  AND: [AuthorizationWhereInput!]
  OR: [AuthorizationWhereInput!]
  NOT: [AuthorizationWhereInput!]
}

input AuthorizationWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createAuthorization(data: AuthorizationCreateInput!): Authorization!
  updateAuthorization(data: AuthorizationUpdateInput!, where: AuthorizationWhereUniqueInput!): Authorization
  upsertAuthorization(where: AuthorizationWhereUniqueInput!, create: AuthorizationCreateInput!, update: AuthorizationUpdateInput!): Authorization!
  deleteAuthorization(where: AuthorizationWhereUniqueInput!): Authorization
  deleteManyAuthorizations(where: AuthorizationWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  authorization(where: AuthorizationWhereUniqueInput!): Authorization
  authorizations(where: AuthorizationWhereInput, orderBy: AuthorizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Authorization]!
  authorizationsConnection(where: AuthorizationWhereInput, orderBy: AuthorizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthorizationConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  authorization(where: AuthorizationSubscriptionWhereInput): AuthorizationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  first_name: String!
  last_name: String!
  location: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  first_name: String!
  last_name: String!
  location: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  first_name_ASC
  first_name_DESC
  last_name_ASC
  last_name_DESC
  location_ASC
  location_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  first_name: String!
  last_name: String!
  location: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  first_name: String
  last_name: String
  location: String
}

input UserUpdateInput {
  first_name: String
  last_name: String
  location: String
}

input UserUpdateManyMutationInput {
  first_name: String
  last_name: String
  location: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  first_name: String
  first_name_not: String
  first_name_in: [String!]
  first_name_not_in: [String!]
  first_name_lt: String
  first_name_lte: String
  first_name_gt: String
  first_name_gte: String
  first_name_contains: String
  first_name_not_contains: String
  first_name_starts_with: String
  first_name_not_starts_with: String
  first_name_ends_with: String
  first_name_not_ends_with: String
  last_name: String
  last_name_not: String
  last_name_in: [String!]
  last_name_not_in: [String!]
  last_name_lt: String
  last_name_lte: String
  last_name_gt: String
  last_name_gte: String
  last_name_contains: String
  last_name_not_contains: String
  last_name_starts_with: String
  last_name_not_starts_with: String
  last_name_ends_with: String
  last_name_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    