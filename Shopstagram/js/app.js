const tab = ["Ojciec", "Abraham", "miał", 7, "synów"];
console.log(tab.includes(7));

const tab2 = ["Ojciec Abraham miał 7 synów", "7 synów miał Ojciec Abraham", "A oni siedli i nic nie jedli", "Tylko śpiewali sobie tak"];
let tab3 = [];
for (let i=0; i < tab2.length; i++) {
    tab3.push(tab2[i].split(" "));
}
console.log(tab3)

const person = {
    name: "Andrzej",
    surname: "Nowak",
    age: 36,
    favouriteMovies: ["Rambo", "Rambo II", "Rambo III"],
    getFavMovies: function() {
        return this.favouriteMovies.join(", ");
    },
    getFullName: function() {
        return (`${this.name} ${this.surname}`);
    },
    sayHello: function() {
        return (`Hello my name is ${this.getFullName()}, I am ${this.age}, and my favorite movies are ${this.getFavMovies()}.`);
    }
};

console.log(person.sayHello());


