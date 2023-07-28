export default class Acconut {
    constructor(name, agency, account, current_balance) {
        this.name = name;
        this.agency = agency;
        this.account = account;
        this.current_balance = current_balance;
    }

    static fromJson(json) {
        return new Acconut(json.name, json.agency, json.account, json.current_balance);
    }

    static toJson() {
        return {
            name: this.name,
            agency: this.agency,
            account: this.account,
            current_balance: this.current_balance
        }
    }

    static fromJsons(jsons) {
        return jsons.map((json) => this.fromJson(json));
    }
}