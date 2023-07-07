const { buildSchema } = require('graphql');
module.exports = buildSchema(`
    type Banner {
        id: Int
        image_url: String!
        category: String!
        user_id: ID
    }

    type Product {
        id: Int
        title: String!
        price: Int!
        image_url: String!
        description: String!
        category: String!
        quantity: Int!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        password: String
        isAdmin: String!
        products: [Product!]!
    }

    type Cart {
        user_id: Int
        qty: Int
        productId: Int
    }

    type searchSuggessions {
        id: Int
        title: String
    }

    type SearchedProducts {
        id: Int
        price: Int
        title: String
        description: String
        image_url: String
    }

    type AuthData {
        token: String!
        user_id: String!
    }

    type ProductData {
        products: [Product!]!
        totalPages: Int!
    }

    type searchSuggessionData {
        searchList: [searchSuggessions!]!
    }

    type SearchedProductsData { 
        search: [SearchedProducts]
        totalPages: Int!
    }

    type BannerData {
        banners: [Banner]!
    }


    type CartData {
        carts: [Cart]!
    }

    input BannerInputData {
        image_url: String!
        category: String!
        user_id: ID
    }

    input UserInputData {
        email: String!
        password: String!
    }


    input CartInputData {
        user_id: Int
        qty: Int
        product: Int
    }

    input ProductInputData {
        user_id: Int
        title: String
        price: Int
        image_url: String
        description: String
        category: String
        quantity: Int
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        products(page: Int, perPage: Int): ProductData!
        product(id: ID!): Product!
        searchList(word: String): searchSuggessionData!
        search(word: String!, page: Int, perPage: Int): SearchedProductsData!
        user: User!
        cart(user_id: Int): ProductData!
        banners: BannerData!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createBanner(bannerInput: BannerInputData): Banner!
        createProduct(productInput: ProductInputData): Product!
        addTocart(cartInput: CartInputData): Cart
        updateProduct(id: Int!, productInput: ProductInputData): Product!
        deleteProduct(id: Int): Boolean
        updateStatus(status: String!): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
