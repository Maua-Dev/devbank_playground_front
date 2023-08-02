import axios from "axios";
import Transaction from "../domain/entities/Transaction";
import Account from "../domain/entities/Account";
export default class GlobalDatasource {
  constructor(url) {
    this.url = url;
  }

  async getAccount() {
    const response = await axios.get(this.url);
    return Account.fromJson(response.data);
  }

  async withdraw(wallet) {
    const response = await axios.post(`${this.url}/withdraw`, wallet.toJson());
    return response.data;
  }

  async deposit(wallet) {
    try {
      const response = await axios.post('https://httpbin.org/post');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getAllTransactions() {
    const response = await axios.get(`${this.url}/history`)
    return Transaction.fromJsons(response.data.all_transactions);
  }
}
