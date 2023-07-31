import axios from "axios";
import Acconut from "../domain/entities/Account";
import Transaction from "../domain/entities/Transaction";

class GlobalDatasource {

    constructor(url){ 
        this.url = url;
    }

    async getAccount() {
        axios.get(this.url).then((response) => {
            return Acconut.fromJson(response.data)
        })
    }

    async withdraw(wallet) {
        axios.post(`${this.url}/withdraw`, wallet.toJson()).then((response) => {
            return response.data})
    }

    async deposit( wallet) {
        axios.post(`${this.url}/deposit`, wallet.toJson()).then((response) => {
            return response.data})
    }

    async getAllTransactions() {
        axios.post(`${this.url}/history`.then((response) => {
            return Transaction.fromJsons(response.data)}))}
}