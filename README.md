# Boomtown 🏙

Boomtown is a full stack React project including server side and client side. It has a login system (with authentication) and a C-to-C interact system to borrow and share items. 

## Technologies

Technologies involved in building the site: React, Node, Express, Apollo, Postgres, GraphQL, Redux, React-Router, Material UI

* The server side is an Express server based on Node and it usees Apollo to apply GraphQL and fetch data from Postgres database. The database has 4 tables (items, item tags, tags, and users). The user password is hashed in the database to make sure security. Authentication is implemented in the API resolver.

* The client side is based on React. It requests data through Apollo client and sends GraphQL queries to the server. The react-router is applied to switch among pages. All the pages are dynamically rendered from components. Most front-end UIs are from Material UI. On the client side, Redux is used to communicate between components, and the Context is used to handle the login user information.

## Personal Learning Experience

In this project, I learned how to set up an Express server and use Apollo to run GraphQL and connect the Postgres database. The client side can fetch data from the server side and render all the UIs smoothly. The authentication works, and it can manage the login situation and visiting scope. I learned how to dynamically render front-end pages and components to provide better interact experience.

## Overview

A overview of all the pages and their functions.

### Login and Create User

On this page user can login with a account or create a new account. The two forms can switch by the link under the form. The AppBar doesn't show up on this page. The user cannot go to any other pages before login.

<img src="./images/login.png" style="width: 100%;" />

### Items Page

On Items page, the user can get the information of all the items from other users. Click the image on each card can go to the item owner's profile page.

<img src="./images/items.png" style="width: 100%;" />

### Share Page

User can go to share new item page by clicking the button on the other pages' AppBar. On the share page, there is a preview of the new item that will be created. The preview can be dynamically updated while user typing or selecting image or tags in the right input forms. When the forms are filled, the share button will be enabled and popup a dialog to choose to add another new item or go to items page. 

<img src="./images/share.png" style="width: 100%;" />

### Profile Page

On profile page, user can see the brief information like name and bio, and a summary of all the items the user owned or borrowed.

<img src="./images/profile.png" style="width: 100%;" />


# Installation & Run
---
## Server

Commands must be run from the `server` directory:

### Installation

```bash
yarn
```

### Run

```bash
yarn run start:dev
```

## Client

Commands must be run from the `client` directory:

### Installation

```bash
yarn
```

### Run

```bash
yarn start
```

