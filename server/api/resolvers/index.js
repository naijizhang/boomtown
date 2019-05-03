const { ApolloError } = require('apollo-server-express');

// @TODO: Uncomment these lines later when we add auth
// const jwt = require("jsonwebtoken")
const authMutations = require("./auth")
// -------------------------------
const { DateScalar } = require('../custom-types');

module.exports = app => {
  return {
    Date: DateScalar,

    Query: {
      viewer(parent,args,context,info) {
        if(context.token){
          return context.token;
        }
        return null;
      },
      async user(parent, { id }, { pgResource }, info) {
        try {
          const user = await pgResource.getUserById(id);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async items(parent, { filter }, { pgResource }, info) {
        try {
          const items = await pgResource.getItems(filter);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async tags(parent, args, { pgResource }) {
        try {
          const tags = await pgResource.getTags();
          return tags;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    User: {
      async items({ id }, args, { pgResource }) {
        try {
          const items = await pgResource.getItemsForUser(id);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrowed({ id }, args, { pgResource }) {
        try {
          const items = await pgResource.getBorrowedItemsForUser(id);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    Item: {
      async itemowner({ itemowner }, args, { pgResource }) {
        try {
          const user = await pgResource.getUserById(itemowner);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      },

      async tags({ id }, args, { pgResource }) {
        try {
          const tags = await pgResource.getTagsForItem(id);
          return tags;
        } catch (e) {
          throw new ApolloError(e);
        }
      },

      async borrower({ borrower }, args, { pgResource }) {
        try {
          const user = await pgResource.getUserById(borrower);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    Mutation: {
      ...authMutations(app),
      async addItem(parent, { item }, context, info) {
        try {
          //image = await image;
          //const user = await jwt.decode(context.token, app.get('JWT_SECRET'));
          const user = {
            id: context.token.id
          };
          const newItem = await context.pgResource.saveNewItem({
            item: item,
            user
          });
          return newItem;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    }
  };
};
