//rewrite tagsQueryString in other way
function tagsQueryString(tags, itemid, result) {
  let res = '';
  tags.map((value, index) => {
    res += `($${index + 1},${itemid})`;
    index < tags.length - 1 ? (res += ',') : (res += ';');
  });
  return res;
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text:
          'INSERT INTO users(fullname,email,password) VALUES ($1,$2,$3) RETURNING *',
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw 'An account with this username already exists.';
          case /users_email_key/.test(e.message):
            throw 'An account with this email already exists.';
          default:
            throw 'There was a problem creating your account.';
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: 'SELECT * FROM users WHERE email=$1;',
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw 'User was not found.';
      }
    },
    async getUserById(id) {
      const findUserQuery = {
        text: 'SELECT id, email, fullname, bio FROM users WHERE id=$1;',
        values: [id]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw 'User was not found.';
      }
    },
    async getItems(idToOmit) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE itemowner!=$1;`,
          values: idToOmit ? [parseInt(idToOmit)] : []
        });
        return items.rows;
      } catch (error) {
        throw error;
      }
    },
    async getItemsForUser(id) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE itemowner=$1;`,
          values: [id]
        });
        return items.rows;
      } catch (error) {
        throw error;
      }
    },
    async getBorrowedItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT * FROM items WHERE borrower=$1;`,
        values: [id]
      });
      return items.rows;
    },
    async getTags() {
      try {
        const tags = await postgres.query('SELECT * FROM tags');
        return tags.rows;
      } catch (error) {
        throw error;
      }
    },
    async getTagsForItem(id) {
      try {
        const tagsQuery = {
          text: `SELECT id,title FROM tags INNER JOIN itemtags ON tags.id=itemtags.tagid WHERE itemtags.itemid=$1;`,
          values: [id]
        };
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (error) {
        throw error;
      }
    },
    async saveNewItem({ item, user }) {
      return new Promise((resolve, reject) => {
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query('BEGIN', async err => {
              //const { title, description, tags, imageurl, created } = item;
              const { title, description, tags } = item;
              // Generate new Item query
              // const newItemQuery = `INSERT INTO items(title, description, itemowner,imageurl,created) VALUES('${title}','${description}',${parseInt(
              //   user.id
              // )}, ${imageurl}, ${created.toString()}) RETURNING "id", "title", "imageurl", "description", "itemowner", "borrower", "created";`;
              const newItemQuery = `INSERT INTO items(title, description, itemowner) VALUES('${title}','${description}',${parseInt(
                user.id
              )}) RETURNING "id", "title", "imageurl", "description", "itemowner", "borrower", "created";`;
              // Insert new Item
              const { rows } = await postgres.query({
                text: newItemQuery
              });
              // Generate tag relationships query
              const newItem = rows[0];
              const tagIds = tags.map(tag => tag.id);
              const tagRelationQuery =
                `INSERT INTO itemtags(tagid, itemid) VALUES ` +
                tagsQueryString(tagIds, newItem.id, '');
              // Insert tags
              await postgres.query({
                text: tagRelationQuery,
                values: tagIds ? tagIds : []
              });

              // Commit the entire transaction!
              client.query('COMMIT', err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
                resolve(newItem);
              });
            });
          } catch (e) {
            // Something went wrong
            client.query('ROLLBACK', err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
