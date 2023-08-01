import axios from "axios";
import Acconut from "../domain/entities/Account";
import Transaction from "../domain/entities/Transaction";
export default class GlobalDatasource {

    constructor(url){ 
        this.url = url;
    }

    async getAccount() {
        await axios.get(this.url).then((response) => {
            return Acconut.fromJson(response.data)
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