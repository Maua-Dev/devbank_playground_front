export default class Transaction {
    constructor(type, value, date, currentBalance) {
        this.type = type;
        this.value = value;
        this.date = date;
        this.currentBalance = currentBalance;
    }

    static fromJson(json) {
        return new Transaction(json.type, json.value, json.timestamp, json.current_balance);
    }

    static fromJsons(jsons) {
        return jsons.map((json) => this.fromJson(json));
    }

    static toJson() {
        return {
            "type": this.type,
            "value": this.value,
            "timestamp": this.date,
            "current_balance": this.currentBalance
        }
    }
}