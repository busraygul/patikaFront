
let user1 = {
    firstName: "Büşra",
    lastName: "Aygül",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function(){ //bir obje içinde fonksiyon da tanımlayabiliriz
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    }
};
console.log(user1)