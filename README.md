# Ice Cream API 🍦

## Installation

1. Clone this repository to your lessons folder and change directory into it.
1. Run `npm i` to download required dependencies.
1. Create a `.env` file and add your `DATABASE_URL` to it with your MongoDB Atlas connection string:

```
DATABASE_URL=mongodb+srv://dbuser:dfsasdt3qfvs@cluster0.scylw.mongodb.net/icecream?retryWrites=true&w=majority
```

## Getting Started

1. Run `node db/seed.js` to populate your database with seed data.
1. Run `nodemon index.js` to start your development server. You should see the following:

```
[nodemon] starting `node index.js`
Mmm ice cream...🍦🍦🍦
Connected to MongoDB Atlas on esinsIceCreams database. Life is good 😎
```

Happy coding!!!
