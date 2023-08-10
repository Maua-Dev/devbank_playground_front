import axios from "axios";
import Transaction from "../domain/entities/Transaction";
import Account from "../domain/entities/Account";

export default class GlobalDatasource {
  constructor(url) {
    this.url = url;
  }

  async getAccount() {
    if(this.url.substring(0, 8) !== 'https://'){
      this.url = `https://${this.url}`;
    }
    const response = await axios.get(this.url);
    
    if(response.data != null){
      return Account.fromJson(response.data);
    } else {
      return null;
    }
  }

  async withdraw(wallet) {
    if(this.url.substring(0, 8) !== 'https://'){
      this.url = `https://${this.url}`;
    }
    const response = await axios.post(`${this.url}/withdraw`, wallet.toJson());
    return response.data;
  }

  async deposit(wallet) {
    if(this.url.substring(0, 8) !== 'https://'){
      this.url = `https://${this.url}`;
    }
    const response = await axios.post(`${this.url}/deposit`, wallet.toJson());
    return response.data;
  }

  async getAllTransactions() {
    if(this.url.substring(0, 8) !== 'https://'){
      this.url = `https://${this.url}`;
    }
    const response = await axios.get(`${this.url}/history`)
    if(response.data !== null){
      return Transaction.fromJsons(response.data.all_transactions);
    } else {
      return null;
    }
  }
}
