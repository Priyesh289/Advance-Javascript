/*the Author constructor should take name, birthYear, and nationality as arguments.*/
function Author( n,dob,nat){
    this.name=n;
    this.BirthYear=dob;
    this.nationality=nat
}

/*The Book constructor should take title, author (an Author object), genre, and price as arguments*/
function Book(t,au,g,p){
    this.title=t;
    this.autor=au;
    this.genre=g;
    this.price=p
}

/*Implement methods in the Book prototype:
getBookInfo - to print the book's title, author's name, genre, and price*/

Book.prototype.getBookInfo=function(){
    console.log(this.title,this.author,this.genre,this.price)
}

let p1 = new Book("Atomic Habit","james clear",1990,450)
p1.getBookInfo()

console.log(p1)

/*Create an online bookstore by creating instances of Book and Author objects.
Display the book details for each book in the bookstore.*/

