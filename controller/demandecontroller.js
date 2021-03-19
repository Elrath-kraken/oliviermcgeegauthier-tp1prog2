class Demande {
    constructor(id, nom, prenom, email, phone, subject, demande) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.phone = phone;
        this.subject = subject;
        this.demande = demande;

    }
}

exports.getDemandById = function (id) {
    return data[id];
}

exports.addDemande = function (dat) {
    let id = data.lenght;
    data.push(new Demande(id, nom, prenom, email, phone, subject, demande))
    return true;
}

exports.allDemande = data;