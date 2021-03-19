class blog {
    constructor(id, titre, contenu, auteur) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur;

    }
}

const data = [
    new blog(0, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Alan Turing'),
    new blog(1, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Ada Lovelace'),
    new blog(2, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Donald Knuth'),
    new blog(3, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Grace Hopper'),
    new blog(4, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Brian W. Kernighan'),
    new blog(5, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Alan Perlis'),
    new blog(6, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'John Backus'),
    new blog(7, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Edsger W. Dijkstra'),
    new blog(8, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Tim Berners-Lee'),
    new blog(9, 'Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Marvin Minsky')
];
exports.getblogById = function (id) {
    return data[id];
}

exports.addblog = function (dat) {
    let id = data.length;
    data.push(new blog(id, dat.titre, dat.contenu, dat.auteur))
    return true;
}

exports.allblog = data;