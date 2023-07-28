export default class Wallet {
    constructor(two, five, ten, twenty, fifty, oneHundred, twoHundred) {
        this.two = two;
        this.five = five;
        this.ten = ten;
        this.twenty = twenty;
        this.fifty = fifty;
        this.oneHundred = oneHundred;
        this.twoHundred = twoHundred;
    }

    static fromJson(json) {
        return new Wallet(json.two, json.five, json.ten, json.twenty, json.fifty, json.oneHundred, json.twoHundred);
    }

    static toJson() {
        return {
            two: this.two,
            five: this.five,
            ten: this.ten,
            twenty: this.twenty,
            fifty: this.fifty,
            oneHundred: this.oneHundred,
            twoHundred: this.twoHundred
        }
    }
}