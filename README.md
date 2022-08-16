# KeyKing
 CONTENTS OF THIS FILE
---------------------

 * Introduction

This is my first project as a junior full stack developer.
With this project I want to represent one of my wishes, which is connected to fast-typing. We all know how cool it looks and feels when we hear that noise, comming from the keyboardwhich belongs to the person sitting near us. 

This application will help you develop your typing skill even further. 

 # Main goal

The main goal is to combine both fun, and hard work. With KeyKing you can learn to type faster and on top of that it will be amusing to accomplish all of those achievements. 

 # RestAPI

## 🛠 Libraries and tools used

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://github.com/expressjs/cors)
- [Nodemon](https://github.com/remy/nodemon)
- [JSONWebToken](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Getting Started

Clone this repository and install dependencies

```
> git clone https://github.com/Matey-Tsilov/KeyKing.git
> cd server
> npm i
```

To start the server, you must run the following command in your terminal:

```
> npm start
```

## Base URL

The Base URL for the API is: `http://localhost:3030`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

#### USER COLLECTION ####

# Endpoints: Users

- `/users/register` -- register
- `/users/login` -- login
- `/users/logout` -- logout

## Create a new user [register & login]

Create a new user by sending a `POST` request to `/users/register` or `/users/register` with properties `email`, `password`. The service will respond with an object, containing accessToken, email and _id of the newly created user.

### Body

```
{
  email: string;
  password: string;
}
```

### Success Response:

Code: 201 Created

Content:

```
{
    _id: string;
    email: string;
    accessToken: string;
}
```

## Logout

# GET to users/logout

(Adds userToken to a blackList)

Code: 204 No Content


#### TEXT COLLECTION ####

# Endpoints: Texts

- `/data/catalog` -- create new text / get all texts;
- `/data/catalog/{userId}` -- get / update / delete text by provided id; 

## Get all Texts

Send a `GET` request to `/data/catalog`. The service will respond with an object containing all records from Text collection. 

Send a `GET` request to `/data/catalog?where=_ownerId%3D%22{userId}%22`. The service will respond with an object, containing the searched user information.


## Get Text by id

Send a `GET` request to `data/catalog/{textId}`. The service will respond with an text object, containing Text information.

### Success Response:

Content:

```
{
    _id: string,
    title: string,
    time: number,
    language: string,
    content: string,
    loot: number,
    _ownerId: string,
    __v: 0
}
```

## Update Text by id

Update an existing Text by sending a `PUT` request to `/data/catalog/{textId}` with properties `language`, `loot`, `content`, `time`, `title` and `address`. The service will respond with an object, containing newly updated user.

### Body

```
{
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  phoneNumber: string;
  address: {
    country: string,
    city: string;
    street: string;
    streetNumber: number;
  }
}
```

### Success Response:

Code: 200 OK

Content:

```
{
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    phoneNumber: string;
    createdAt: string;
    updatedAt: string;
  }
}
```

## Delete user by userId

Delete an existing user by sending a `DELETE` request to `/users/{userId}`. The service will respond with an object, containing userId of the deleted user.

### Success Response:

Code: 200 OK

Content:

```
{
  userId: string;
}
```

**In case of a validation error, the service will respond with an error status code and an object containing the error message**.

### Error Response:

```
{
  message: string;
}
```

## Further Information
You may create issues, regarding missing, incorrect or incomplete information. Any contribution is welcome!

