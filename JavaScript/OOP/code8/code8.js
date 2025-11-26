class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    return `Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ₹${this.price}`;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const t1 = new OnlineTicket("Avatar 3", "A12", 300, 30);
const t2 = new OnlineTicket("Iron Man", "B18", 250, 25);

console.log("Ticket 1 Total:", t1.getTotalAmount());
console.log("Ticket 2 Total:", t2.getTotalAmount());

console.log(t1.printTicket());
console.log(t2.printTicket());
