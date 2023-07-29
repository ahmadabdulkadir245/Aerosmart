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
        id: ID
        email: String
        first_name: String
        last_name: String
        password: String
        isAdmin: String
    }

    type Address {
        id: Int
        user_id: Int
        first_name: String
        last_name: String
        address_line_1: String
        address_line_2: String
        phone_number_1: String
        phone_number_2: String
        city: String
        state: String
        is_default: Boolean
    }

    type Cart {
        id: Int
        quantity: Int
        product_id: Int
        user_id: Int
    }

    type Wishlist {
        id: Int
        user_id: Int
        product_id: Int
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

    type UserData {
        users: [User]
    }

    type BannerData {
        banners: [Banner]!
    }

    type AddressData {
        addresses: [Address]!
    }

    type CartData {
        carts: [Cart]!
    }

    type WishlistData {
        wishlists: [Wishlist]!
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

    input UsernameInputData {
        id: Int
        first_name: String
        last_name: String
    }

    input AddressInput {
        user_id: Int
        first_name: String
        last_name: String
        address_line_1: String
        address_line_2: String
        phone_number_1: String
        phone_number_2: String
        city: String
        state: String
    }

    input CartInputData {
        quantity: Int
        product_id: Int
        user_id: Int
    }

    input WishlistInputData {
        user_id: Int
        product_id: Int
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
        users: UserData
        user(id: Int): User
        cart(user_id: Int): CartData!
        wishlists(user_id: Int): WishlistData!
        productsInCart(ids: [Int]): [Product]
        banners: BannerData!
        addresses(user_id: Int): AddressData
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        updateUsername(usernameInput: UsernameInputData): User
        createBanner(bannerInput: BannerInputData): Banner!
        createProduct(productInput: ProductInputData): Product!
        addToCart(cartInput: CartInputData): Cart
        addToWishlist(wishlistInput: WishlistInputData): Wishlist
        deleteWishlist(user_id: Int, wishlist_id: Int): Boolean
        removeFromCart(user_id: Int, cart_item_id: Int): Boolean
        updateProduct(id: Int!, productInput: ProductInputData): Product!
        deleteProduct(id: Int): Boolean
        updateStatus(status: String!): User!
        createAddress(addressInput: AddressInput): Address
        updateAddress(id: Int!, addressInput: AddressInput): Address!
        deleteAddress(user_id: Int, address_id: Int): Boolean
        setDefaultAddress(user_id: Int, address_id: Int): Boolean
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
