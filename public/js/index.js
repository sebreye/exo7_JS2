class Personnage {
    constructor(age, nom, ville) {
        this.age = age;
        this.nom = nom;
        this.ville = ville;
    }

    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.nom}`);
    }
}
let personnage1 = new Personnage(30, 'Alice', 'Paris');
let personnage2 = new Personnage(20, 'Bob', 'Lyon')