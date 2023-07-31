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

    getTotal() {
        return (this.two * 2) + (this.five * 5) + (this.ten * 10) + (this.twenty * 20) + (this.fifty * 50) + (this.oneHundred * 100) + (this.twoHundred * 200);
    }

    setTwo(two) {
        this.two = two;
    }
    
}