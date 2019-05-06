# Boomtown 🏙

Boomtown is a full stack React project including server side and client side. It has a login system (with authentication) and a C-to-C interact system to borrow and share items. 

## Technologies

Technologies involved in building the site: React, Node, Express, Apollo, Postgres, GraphQL, Redux, React-Router, Material UI

* The server side is an Express server based on Node and it usees Apollo to apply GraphQL and fetch data from Postgres database. The database has 4 tables (items, item tags, tags, and users). The user password is hashed in the database to make sure security. Authentication is implemented in the API resolver.

* The client side is based on React. It requests data through Apollo client and sends GraphQL queries to the server. The react-router is applied to switch among pages. All the pages are dynamically rendered from components. Most front-end UIs are from Material UI. On the client side, Redux is used to communicate between components, and the Context is used to handle the login user information.

## Personal Learning Experience

In this project, I learned how to set up an Express server and use Apollo to run GraphQL and connect the Postgres database. The client side can fetch data from the server side and render all the UIs smoothly. The authentication works, and it can manage the login situation and visiting scope. I learned how to dynamically render front-end pages and components to provide better interact experience.

## Server

Commands must be run from the `server` directory:

### Installation

```bash
npm install
```

### Run

```bash
npm run start:dev
```

### Tests

Just linting:

```bash
npm run lint
```

Run linting, and fix any errors:

```bash
npm run lint:fix
```

Run Jest tests:

```
npm run jest
```

Run Jest tests, and watch for changes:

```bash
npm run jest:watch
```

Run all tests:

```bash
npm run test
```

## Client

Commands must be run from the `client` directory:

### Installation

```bash
npm install
```

### Run

```bash
npm start
```

### Build

```bash
npm run build
```

### Tests

Just linting:

```bash
npm run lint
```

Run linting, and fix any errors:

```bash
npm run lint:fix
```

Run all tests:

```bash
npm run test
```


