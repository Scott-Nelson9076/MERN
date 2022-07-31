import { faker } from '@faker-js/faker/locale/de';
import express from 'express';
const app = express();
const port = 8004;

const createUser = () => {
    const fakeyWakeyDude = {
        firstName: faker.name.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.number,
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        id: Math.floor(Math.random() * 100000000).toString()

    };
    return fakeyWakeyDude;
}

const createCompany = () => {
    const fakeyWakeyCompany = {
        id: Math.floor(Math.random() * 100000000).toString(),
        name: faker.company.companyName,
        adress: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()

        }
    }
    return fakeyWakeyCompany;
}


app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json(newFakeCompany);
});

app.get("/api/company/user", (req, res) => {
    const fakeComp = createCompany();
    const fakeUse = createUser();
    const fakeCompNUser = [fakeComp,fakeUse]
    res.json(fakeCompNUser);
});

app.listen(port);