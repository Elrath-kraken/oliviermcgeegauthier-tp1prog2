class formationsnode {
    constructor(id, page, nom, description, prix) {
        this.id = id;
        this.page = page;
        this.nom = nom;
        this.description = description;
        this.prix = prix;

    }
}

const data = [
    new formationsnode(0, 6, 'Formation 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '400$'),
    new formationsnode(1, 7, 'Formation 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '300$'),
    new formationsnode(2, 8, 'Formation 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '700$'),
    new formationsnode(3, 9, 'Formation 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '500$'),
    new formationsnode(4, 10, 'Formation 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '400$')
];

exports.getformationsnodeById = function (id) {
    return data[id];
}

exports.addformationsnode = function (dat) {
    let id = data.length;
    data.push(new formationsnode(id, dat.page, dat.nom, dat.description, dat.prix))
    return true;
}

exports.allformationsnode = data;