class formations {
    constructor(id, nom, description, prix) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;

    }
}

const data = [
    new formations(0, 'Développement Web', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '500$')
];
exports.getformationsById = function (id) {
    return data[id];
}

exports.addformations = function (dat) {
    let id = data.length;
    data.push(new formations(id, dat.nom, dat.description, dat.prix))
    return true;
}

exports.allformations = data;