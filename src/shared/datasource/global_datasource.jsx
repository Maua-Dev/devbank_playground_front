import axios from "axios";
import Transaction from "../domain/entities/Transaction";
import Account from "../domain/entities/Account";
export default class GlobalDatasource {

    constructor(url){ 
        this.url = url;
    }

    async getAccount() {
        const response = await axios.get(this.url);
        return(Account.fromJson(response.data));

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
        await axios.post(`${this.url}/history`).then((response) => {
            return Transaction.fromJsons(response.data)})}
}