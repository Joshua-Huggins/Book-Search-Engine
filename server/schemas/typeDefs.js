const typeDefs = `
type Book {
    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
}
type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}
type Auth {
    tokenId: ID!
    user: User!
}
type Query {
    user: [User]
}    
`
