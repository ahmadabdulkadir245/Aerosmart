const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const Product = require('../models/product');
const Banner = require('../models/banner_image');
const User = require('../models/user');
const db = require('../util/database');
const Cart = require('../models/cart');
const CartItems = require('../models/cart_items');
const Address = require('../models/addresses');
const Wishlist = require('../models/wishlist');




module.exports = {
  createUser: async function({ userInput }, req, res) {
    // if (!validator.isEmail(userInput.email)) {
    //   errors.push({ message: 'E-Mail is invalid.' });
    // }
    // if (
    //   validator.isEmpty(userInput.password) ||
    //   !validator.isLength(userInput.password, { min: 5 })
    // ) {
    //   errors.push({ message: 'Password too short!' });
    // }
    // if (errors.length > 0) {
    //   const error = new Error('Invalid input.');
    //   error.data = errors;
    //   error.code = 422;
    //   throw error;
    // }

    
const userExist = await User.userEmailExist(userInput.email)

if (userExist) {
  return {
    id: '',
    email: false,
    password: '',
    isAdmin: '',
  };
}

const hashedPw = await bcrypt.hash(userInput.password, 12);
const user = new User(null, userInput.email, hashedPw, '');

await user.save();

return {
  id: user.id,
  email: user.email,
  password: user.password,
  isAdmin: user.isAdmin
};
  },
  getCartInProducts: async function({ user_id }, req) {
    try {
        // Fetch cart items for the user
        const carts = await CartItems.fetchUserCart(user_id);
        // Extract product IDs from cart items
        const productIds = carts.map(cart => cart.product_id);
        // Fetch products based on product IDs
        const products = await Product.fetchProductsByIds(productIds);
        // Map each product with its corresponding cart ID and quantity
        const productsWithCartInfo = products.map(product => {
            const cartInfo = carts.find(cart => cart.product_id === product.id);
            if (cartInfo) {
                return {
                    ...product,
                    cart_id: cartInfo.id,
                    cart_quantity: cartInfo.quantity,
                };
            }
            return product;
        });
        // Return combined cart and product details
        return {
            cart: carts[0], // Assuming each user has only one cart
            products: productsWithCartInfo,
        };
    } catch (error) {
        throw error;
    }
},

  addToCart: async function ({ cartInput }) {
    const productExist = await CartItems.productExist(cartInput.product_id, cartInput.user_id);
    if (productExist.length > 0) {
      CartItems.updateQuantity(productExist[0].id, productExist[0].quantity + cartInput.quantity);
      return {
        id: productExist[0].id,
        quantity: productExist[0].quantity + cartInput.quantity,
        product_id: cartInput.product_id,
        user_id: cartInput.user_id,
      };
    }

    const cartItems = new CartItems(null, cartInput.quantity, cartInput.product_id, cartInput.user_id);
    cartItems.save();
    return {
      id: cartItems.id,
      quantity: cartItems.quantity,
      product_id: cartItems.product_id,
      user_id: cartItems.user_id,
    };
  },
  removeFromCart: async function ({ user_id, product_id }) {
    try {
      // Check if the cart item exists
      const cartItem = await CartItems.findById(user_id, product_id);
      if (!cartItem) {
        throw new Error('Cart item not found');
      }
      // Remove the cart item from the database
      await CartItems.deleteById(user_id, product_id);
      
      // Return true to indicate successful removal
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  login: async function({ email, password }) {
    const userExists = await User.userEmailExist(email);

    if (!userExists) {
      const error = new Error('Email has not been registered.');
      error.code = 401;
      throw error;
    }
    
    const isEqual = await bcrypt.compare(password, userExists.password);
    if (!isEqual) {
      const error = new Error('Email or Password is incorrect.');
      error.code = 401;
      throw error;
    }
    
    const token = jwt.sign(
      {
        user_id: userExists.id,
        email: userExists.email
      },
      'somesupersecretsecret',
      { expiresIn: '1h' }
    );
    
    return { token: token, user_id: userExists.id };
  },

    createProduct: async function({ productInput }, req) {

        const product = new Product(null, productInput.title, productInput.image_url, productInput.description, productInput.price, productInput.category, productInput.quantity, 1);

         await product.save()
    
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          image_url: product.image_url,
          description: product.description,
          category: product.category,
          quantity: product.quantity,
          user_id: 1,
          // createdAt: createdProduct.createdAt.toISOString(),
          // updatedAt: createdProduct.updatedAt.toISOString()
        };
      },

      products: async function({ page, perPage }, req) {
        if (!page) {
          page = 1;
        }
        // const productPerPage = perPage
        const offset =  (page - 1 ) * perPage 
        
        const products = await Product.findAndCountAll(perPage, offset).then(([rows, fieldData]) => {
          return {data: rows}
        })
        .catch(err => console.log(err));

        const totalProducts = await Product.fetchAll().then(([rows, fieldData]) => {
          return rows
        })
        .catch(err => console.log(err));

        const totalPages = Math.ceil(totalProducts.length / perPage);
        
        return {
          products: products.data.map(product => {
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                category: product.category,
                quantity: product.quantity,
                image_url: product.image_url,
                description: product.description,
                likes: product.likes,
                // createdAt: product.createdAt.toISOString(),
                // updatedAt: product.updatedAt.toISOString()
            };
          }),
          totalPages: totalPages
        };
      },
      product: async function({ id }, req) {
        const product = await   Product.findById(id)
        .then(([product]) => {
          return product[0]
        })
        .catch(err => console.log(err))
        // if (!product) {
        //   const error = new Error('No post found!');
        //   error.code = 404;
        //   throw error;
        // }
        return {  
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          quantity: product.quantity,
          image_url: product.image_url,
          description: product.description,
          likes: product.likes,
          // createdAt: product.createdAt.toISOString(),
          // updatedAt: product.updatedAt.toISOString()
        };
      },

      createBanner: async function({ bannerInput }, req) {

        const banner = new Banner(null,  bannerInput.category,bannerInput.image_url , 1);

         await banner.save()
    
        return {
          id: banner.id,
          category: banner.category,
          image_url: banner.image_url,
          user_id: 1,
        };
      },

      banners: async function( req) {
        const banners = await Banner.fetchAll().then(([rows, fieldData]) => {
          return rows
        })
        .catch(err => console.log(err));
        return {
          banners: banners.map(banner => {
            return {
                id: banner.id,
                category: banner.category,
                image_url: banner.image_url,
                user_id: banner.user_id,
                // createdAt: banner.createdAt.toISOString(),
                // updatedAt: banner.updatedAt.toISOString()
            };
          }),
        };
      },
      deleteProduct: async function( {id}, req) {
         Product.deleteById(id);
        return true
      },
      updateProduct: async function ({id, productInput}, req) {
        const product = new Product(null, productInput.title, productInput.image_url, productInput.description, productInput.price, productInput.category, productInput.quantity, 1);

         await product.updateById(id)
    
        return {
          id: id,
          title: product.title,
          price: product.price,
          image_url: product.image_url,
          description: product.description,
          category: product.category,
          quantity: product.quantity,
          creator: 1,
          // createdAt: createdProduct.createdAt.toISOString(),
          // updatedAt: createdProduct.updatedAt.toISOString()
        };
      }, 
      searchList: async function( {word}, req) {
        const searchWords = await Product.searchSuggession(word) .then(([rows, fieldData]) => {
          return rows
        })
        .catch(err => console.log(err));

        return { 
           searchList: searchWords.map(searchWord => {
          return {
           id: searchWord.id,
           title: searchWord.title,
          }
        })
      }
    },
      search: async function( {word, page, perPage}, req) {
        if (!page) {
          page = 1;
        }
        // const productPerPage = perPage
        const offset =  (page - 1 ) * perPage 

        const category = await Product.findCategory(word) .then(([rows, fieldData]) => {
          return rows[0]
        })
        .catch(err => console.log(err));
        // JSON.stringify(category)
        console.log(`This is the category === ${category}`)

          const searchWords = await Product.search(word, perPage, offset) .then(([rows, fieldData]) => {
            return rows
          })
          .catch(err => console.log(err));

          const totalProducts = await Product.totalSearchProduct(word).then(([rows, fieldData]) => {
            return rows
          })
          .catch(err => console.log(err));

          const totalPages = Math.ceil(totalProducts.length / page);

          return {
            search: searchWords.map(searchWord => {
              return {
               id: searchWord.id,
               title: searchWord.title,
               description: searchWord.description,
               price: searchWord.price,
               image_url: searchWord.image_url
              }
            }),
            totalPages: totalPages
          }
      },
      // addresses section 
      addresses: async function({ user_id }, req) {
        try {
          const addresses= await Address.fetchByUserId(user_id);
    
          return {
            addresses: addresses.map((address) => ({
              id: address.id,
              user_id: address.user_id,
              first_name: address.first_name,
              last_name: address.last_name,
              address_line_1: address.address_line_1,
              address_line_2: address.address_line_2,
              city: address.city,
              state: address.state,
              phone_number_1: address.phone_number_1,
              phone_number_2: address.phone_number_2,
              is_default: address.is_default
              // createdAt: address.createdAt.toISOString(),
              // updatedAt: address.updatedAt.toISOString(),
            })),
          };
        } catch (err) {
          console.log(err);
          // Handle the error here, you can throw an error or return an appropriate value
          throw new Error('Error fetching addresses');
        }
      },
      createAddress: async function({ addressInput }, req) {
        const address = new Address(
          null,
          addressInput.user_id,
          addressInput.first_name,
          addressInput.last_name,
          addressInput.address_line_1,
          addressInput.address_line_2 || null,
          addressInput.city,
          addressInput.state,
          addressInput.phone_number_1,
          addressInput.phone_number_2 || null
        );
    
        await address.save();
    
        return {
          id: address.id,
          user_id: address.user_id,
          first_name: address.first_name,
          last_name: address.last_name,
          address_line_1: address.address_line_1,
          address_line_2: address.address_line_2,
          city: address.city,
          state: address.state,
          phone_number_1: address.phone_number_1,
          phone_number_2: address.phone_number_2,
          // createdAt: address.createdAt.toISOString(),
          // updatedAt: address.updatedAt.toISOString(),
        };
      },
    
      updateAddress: async function({ id, addressInput }, req) {
        const address = new Address(
          id,
          addressInput.user_id,
          addressInput.first_name,
          addressInput.last_name,
          addressInput.address_line_1,
          addressInput.address_line_2 || null,
          addressInput.city,
          addressInput.state,
          addressInput.phone_number_1,
          addressInput.phone_number_2 || null,
        );
    
        await address.updateById(id, address.user_id);
    
        return {
          id: address.id,
          user_id: address.user_id,
          first_name: address.first_name,
          last_name: address.last_name,
          address_line_1: address.address_line_1,
          address_line_2: address.address_line_2,
          city: address.city,
          state: address.state,
          phone_number_1: address.phone_number_1,
          phone_number_2: address.phone_number_2,
          // createdAt: address.createdAt.toISOString(),
          // updatedAt: address.updatedAt.toISOString(),
        };
      },
      deleteAddress: async function({ user_id, address_id }, req) {
        try {
          // Check if the cart item exists
          const address = await Address.findById(user_id, address_id);
          if (!address) {
            throw new Error('Address not found');
          }
          // Remove the cart item from the database
          await Address.deleteById(user_id, address_id);
          
          // Return true to indicate successful removal
          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      },
      setDefaultAddress: async function({ user_id, address_id }, req) {
        try {
          // Step 1: Fetch the address with the given address_id and user_id
          const address = await Address.findById(user_id, address_id);
          if (!address) {
            throw new Error('Address not found');
          }
          
          await Address.setDefaultAddress(user_id, address_id);
          // const updatedAddress = await Address.findById(user_id, address_id);
          return true

        } catch (err) {
          console.log(err);
          // Handle the error here, you can throw an error or return an appropriate value
          throw new Error('Error setting default address');
        }
      },

      productsInCart: async function({ ids }, req) {
        try {
          const products = await Product.fetchProductsInCart(ids);
          console.log(products)
          return products.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            image_url: product.image_url,
            description: product.description,
            category: product.category,
            quantity: product.quantity,
            // createdAt: product.createdAt.toISOString(),
            // updatedAt: product.updatedAt.toISOString(),
          }));
        } catch (error) {
          console.error('Error fetching products in cart:', error);
          throw new Error('Error fetching products in cart');
        }
      },

      // wishlist section
      addToWishlist: async function ({ wishlistInput }) {
        const productExist = await Wishlist.productExist(wishlistInput.product_id, wishlistInput.user_id);
    
        if (productExist.length > 0) {
       return
        }
        const wishlist = new Wishlist(null, wishlistInput.product_id, wishlistInput.user_id);
        wishlist.save();
        return {
          id: wishlist.id,
          user_id: wishlist.user_id,
          product_id: wishlist.product_id,
        };
      },
      wishlists: async function ({ user_id }) {
        const wishlists = await Wishlist.fetchUserWishlist(user_id);
        return {
          wishlists: wishlists.map(wishlist => ({
            id: wishlist.id,
            product_id: wishlist.product_id,
            user_id: wishlist.user_id,
          })),
        };
      },
      getWishlistProducts: async function({ user_id }, req) {
        try {
            // Fetch wishlist items for the user
            const wishilists = await Wishlist.fetchUserWishlist(user_id);
            // Extract product IDs from wishlist items
            const productIds = wishilists.map(wishlist => wishlist.product_id);
            // Fetch products based on product IDs
            const products = await Product.fetchProductsByIds(productIds);
            // Map each product with its corresponding wishlist ID and quantity
            const productsWithCartInfo = products.map(product => {
                const wishlistInfo = wishilists.find(wishlist => wishlist.product_id === product.id);
                if (wishlistInfo) {
                    return {
                        ...product,
                        wishlist_id: wishlistInfo.id,
                    };
                }
                return product;
            });
            // Return combined wishlist and product details
            return {
                wishlist: wishilists[0], // Assuming each user has only one wishlist
                products: productsWithCartInfo,
            };
        } catch (error) {
            throw error;
        }
    },
      deleteWishlist: async function({ user_id, product_id }, req) {
        try {
          // Check if the cart item exists
          const wishlist = await Wishlist.findById(user_id, product_id);
          if (!wishlist) {
            throw new Error('Wishlist not found');
          }
          // Remove the cart item from the database
          await Wishlist.deleteById(user_id, product_id);
          // Return true to indicate successful removal
          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      },
        //  user section
        updateUsername: async function ({ usernameInput }) {
          // console.log(usernameInput)
        //   const userExist = await User.userExist(usernameInput.id);
        //   if (userExist.length < 0) {
        //  return
        //   }
          const userDetails = await User.fetchUser(usernameInput.id);
          // console.log(userDetails)
        const user = new User(null, userDetails.email, userDetails.password, userDetails.isAdmin, usernameInput.first_name, usernameInput.last_name)
        console.log(user)
        await user.updateById(usernameInput.id)

          return {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
          };
        },
        users: async function () {
          const users = await User.fetchUsers();
          console.log(users)
          return {
            users: users.map(user => ({
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              password: user.password,
              isAdmin: user.isAdmin
            })),
          };
        },
        user: async function ({ id }) {
          const user = await User.fetchUser(id);
          return {
              id: user.id,
              email: user.email,
              first_name: user.first_name,
              last_name: user.last_name,
              password: user.password,
              isAdmin: user.isAdmin
          };
        },
      
    }

