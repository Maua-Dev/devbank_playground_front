
# 💲devbank_playground_front


The main objective of this project is to provide an interactive and educational platform that facilitates practical learning about API creation. 

The project aims to encourage collaboration and knowledge exchange among community members, creating an environment where developers can learn, share experiences, and improve their API development skills. 

The idea behind the project is to simulate a real bank application, where the user can make deposits, withdrawals, and access transaction history through API requests.

Access the project: https://playground.devmaua.com




## ✍️ Scripts
To run the application, it's important to use a package manager tool such as yarn or npm.

###### start
    npm run start
    yarn start

Runs the app in the development mode. 
Open http://localhost:3000 to view it in your browser. 
The page will reload when you make changes.

###### test
    npm run test
    yarn test

Launches the test runner in the interactive watch mode.

###### build
    npm run build
    yarn build

Builds the app for production to the build folder.

###### eject
    npm run eject
    yarn eject

Note: this is a one-way operation. Once you eject, you can't go back! 
This command will remove the single build dependency from your project.


## 🛣️ Routes

### GET /

Retrieve initial user information.
- **Method:** GET
- **Parameters:** None (any parameters sent will be ignored)
- **Response example:**

```json
{
    "name": "Vitor Soller",
    "agency": "0000",
    "account": "00000-0",
    "current_balance": 1000.0
}
```

### POST /deposit

Deposit funds into the user's account.
- **Method:** POST
- **Request example:**

```json
{
    "2": 1,
    "5": 2,
    "10": 3,
    "20": 4,
    "50": 5,
    "100": 6,
    "200": 7
}
```
- **Response example:**

```json
{
    "current_balance": 1000.0,
    "timestamp": 1690482853890
}
```

- **Notes:** If the deposited amount is double the current account balance, the API will return a 403 Forbidden status code and the message "Depósito suspeito" (Suspicious deposit).

### POST /withdraw

Withdraw funds from the user's account.
- **Method:** POST
- **Request example:**

```json
{
    "2": 1,
    "5": 2,
    "10": 3,
    "20": 4,
    "50": 5,
    "100": 6,
    "200": 7
}
```
- **Response example:**

```json
{
    "current_balance": 1000.0,
    "timestamp": 1690482853890
}
```

- **Notes:** If the withdraw amount exceeds the current account balance, the API will return a 403 Forbidden status code and the message "Saldo insuficiente para transação" (Insufficient balance for transaction).

### GET /history

Retrieve the user's transaction history.
- **Method:** GET
- **Parameters:** None (any parameters sent will be ignored)
- **Response example:**

```json
{
  "all_transactions": [
    {
      "type": "deposit",
      "value": 100.0,
      "current_balance": "1000.0",
      "timestamp": 1690482853890
    },
    {
      "type": "withdraw",
      "timestamp": 1691707985704.6152,
      "current_balance": 700.0,
      "value": 300
    },
    {
      "type": "deposit",
      "current_balance": 710.0,
      "timestamp": 1691707990727.101,
      "value": 10
    },
    {
      "type": "withdraw",
      "timestamp": 1691707994750.5022,
      "current_balance": 680.0,
      "value": 30
    }
  ]
}
```

- **Notes:** The response will include a list of transactions, each with the transaction type, value, current balance after the transaction, and timestamp in milliseconds.

## 👨‍🎨 Contributors

- [@EnricoSantarelli](https://github.com/EnricoSantarelli)
- [@VgsStudio](https://github.com/VgsStudio)
- [@HectorGuerrini](https://github.com/hectorguerrini)
- [@JoaoVitorBranco](https://github.com/JoaoVitorBranco)
- [@Brvilardi](https://github.com/Brvilardi)
- [@Isabella Augusta Rodrigues](https://www.behance.net/aaaaaa273)

## 🔥 Special Thanks

- [@Dev. Community Mauá](https://www.instagram.com/devcommunitymaua/)



