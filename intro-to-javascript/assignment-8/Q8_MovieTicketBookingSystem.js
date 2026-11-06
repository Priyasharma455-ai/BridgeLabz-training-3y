class MovieTicket {
  constructor(movieName,seatNo,price) { this.movieName=movieName; this.seatNo=seatNo; this.price=price; }
}
MovieTicket.prototype.printTicket=function() {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Price: Rs. ${this.price}`);
};
class OnlineTicket extends MovieTicket {
  constructor(movieName,seatNo,price,convenienceFee) {
    super(movieName,seatNo,price);
    this.convenienceFee=convenienceFee;
  }
  getTotalAmount() { return this.price+this.convenienceFee; }
}
const ticket1=new OnlineTicket("3 Idiots","A12",200,25);
const ticket2=new OnlineTicket("Dangal","B08",180,20);
ticket1.printTicket();
console.log("Total amount: Rs.",ticket1.getTotalAmount());
ticket2.printTicket();
console.log("Total amount: Rs.",ticket2.getTotalAmount());
console.log("Prototype chain works:",MovieTicket.prototype.isPrototypeOf(OnlineTicket.prototype));
