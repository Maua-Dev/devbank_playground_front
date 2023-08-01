import axios from "axios";
import Account from "../domain/entities/Account";
import Transaction from "../domain/entities/Transaction";
export default class GlobalDatasource {

    constructor(url){ 
        this.url = url;
    }

    async getAccount() {
        console.log(axios.get(this.url));
        axios.get(this.url).then((response) => {
            console.log('AAA')
            console.log(Account.fromJson(response.data))
        })

    }

    async withdraw(wallet) {
        await axios.post(`${this.url}/withdraw`, wallet.toJson()).then((response) => {
            return response.data})
    }

    async deposit(wallet) {
        await axios.post(`${this.url}/deposit`, wallet.toJson()).then((response) => {
            return response.data})
    }

    async getAllTransactions() {
        await axios.post(`${this.url}/history`.then((response) => {
            return Transaction.fromJsons(response.data)}))}
}