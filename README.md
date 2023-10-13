# Feedback Application

## Introduction

- The project name is the Feedback Application
- Create Feedback and view submitted feed back from database

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Javascript](https://www.javascript.com/)

- [Typescript](https://www.typescriptlang.org/)
- [Joi](https://joi.dev/) (validation)

- [Express](https://expressjs.com/)

- [MongoDB](https://www.mongodb.com/)
- [mongodb-memory-server](https://www.npmjs.com/package/mongodb-memory-server) (temporary instance create)

- [React JS](https://reactjs.org/)

## Pre-reqs

- Install [Node](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/download)

# Getting Started

- Clone the repository

- Some basic git commands are:

```
$ git clone https://github.com/aakashDev000/feedbackapplication.git
```

# Backend (Server)

## pre-reqs

- Mongodb (optional)

## Install

- Open new terminal
- Install Npm packages in backend

```
$ cd server
$ npm install
```

### Description

- Create `.env` file in server folder.
- Add whichever port you want the server to run on or it will automatically run on port `9000`.
- If you don't have mongodb no problem there is Automatically creating the mongodb-memory-server in server.
- Once you terminate the server the mongodb memory server will also stop and then the stored data cannot be retrieved.
- `MONGO_URL` (optional)
- `PORT` (optional)

```
$ PORT = 9000
$ MONGO_URL = "mongodb://127.0.0.1/localdev"
```

- Build Typescript to Javascript (It's Mandatory)

```
$ tsc -w
```

- Start the server

```
$ npm run start
```

# Frontend (Client)

- Install Npm packages in Frontend
- Open new terminal

```
$ cd client
$ npm install
```

### Description

- Create `.env` file in client folder.
- which port used in server add the port on `REACT_APP_API_URL` or it will automatically run on port `9000`.

```
$ REACT_APP_API_URL = "http://localhost:9000"
```

- start client

```
$ npm run start
```

- open browser and paste this url `http://localhost:3000`

```
$ http://localhost:3000
```
