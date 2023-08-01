export default class Account {
    constructor(name, agency, account, currentBalance) {
        this.name = name;
        this.agency = agency;
        this.account = account;
        this.currentBalance = currentBalance;
    }

    static fromJson(json) {
        return new Account(json.name, json.agency, json.account, json.current_balance);
    }

    static toJson() {
        return {
            name: this.name,
            agency: this.agency,
            account: this.account,
            current_balance: this.currentBalance
        }
    }

    static fromJsons(jsons) {
        return jsons.map((json) => this.fromJson(json));
    }
}