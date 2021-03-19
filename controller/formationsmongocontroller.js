class formationsmongo {
    constructor(id, page, nom, description, prix) {
        this.id = id;
        this.page = page;
        this.nom = nom;
        this.description = description;
        this.prix = prix;

    }
}

const data = [
    new formationsmongo(0, 1, 'Formation 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '500$'),
    new formationsmongo(1, 2, 'Formation 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '400$'),
    new formationsmongo(2, 3, 'Formation 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '600$'),
    new formationsmongo(3, 4, 'Formation 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '200$'),
    new formationsmongo(4, 5, 'Formation 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '400$')
];

exports.getformationsmongoById = function (id) {
    return data[id];
}

exports.addformationsmongo = function (dat) {
    let id = data.length;
    data.push(new formationsmongo(id, dat.page, dat.nom, dat.description, dat.prix))
    return true;
}

exports.allformationsmongo = data;