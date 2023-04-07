const {faker} = require('@faker-js/faker');
const express = require('express');

const app = express();
const port = 8000;

// User Object
const newUserObj = () => ({
    // _id
    id: faker.database.mongodbObjectId(),
    // firstName
    firstName: faker.name.firstName(),
    // lastName
    lastName: faker.name.lastName(),
    // email
    email: faker.internet.email(),
    // phoneNumber
    phoneNumber: faker.phone.number(),
    // password
    password: faker.internet.password()
})


// Company Object
const newCompanyObj = () => ({

    // _id
    id: faker.database.mongodbObjectId(),
    // name
    name: faker.company.name(),
    address: {
    //  street
        street: faker.address.street(),
        // city
        city: faker.address.cityName(),
        // state
        state: faker.address.state(),
        // zipCode
        zipCode: faker.address.zipCode(),
        // country
        country: faker.address.country()
    }
})

    // Create an api route "/api/users/new" that returns a new user
    app.get("/api/users/new", (req, res) => {
        res.json(newUserObj());
    })

    // Create an api route "/api/companies/new" that returns a new company
    app.get("/api/companies/new", (req, res) => {
        res.json(newCompanyObj());
    })
    // Create an api route "/api/user/company" that returns both a new user and a new company
    app.get("/api/user/company", (req, res) => {
        res.json({user: newUserObj(), company: newCompanyObj()});
    })
app.listen(port, () => console.log('Listening on port: ${port}') );