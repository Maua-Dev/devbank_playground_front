export default class Transaction {
    constructor(type, value, date) {
        this.type = type;
        this.value = value;
        this.date = date;
    }

    static fromJson(json) {
        return new Transaction(json.type, json.value, json.timestamp);
    }

    static fromJsons(jsons) {
        return jsons.map((json) => this.fromJson(json));
    }

    static toJson() {
        return {
            "type": this.type,
            "value": this.value,
            "timestamp": this.date

        }
    }
}