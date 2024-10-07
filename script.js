var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = nome;
        this.cognome = cognome;
    }
    User.prototype.ricarica = function (valore) {
        this.credito = this.credito + valore;
    };
    User.prototype.chiamata = function (durata) {
        if (this.credito - (durata * 0.2) < 0) {
            console.log("non hai abbastanza credito");
        }
        else {
            this.credito = this.credito - (durata * 0.2); // prettier-ignore
            this.numeroChiamate = this.numeroChiamate + 1;
        }
    };
    Object.defineProperty(User.prototype, "chiama404", {
        get: function () {
            return this.credito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getNumeroChiamata", {
        get: function () {
            return this.numeroChiamate;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var chiamante = new User("Mario", "Rossi");
chiamante.ricarica(5); // 1 euro
chiamante.chiamata(1);
chiamante.chiamata(1);
chiamante.chiamata(1);
chiamante.chiamata(1);
chiamante.chiamata(1);
console.log(chiamante.chiama404); // 2 euro
console.log(chiamante.getNumeroChiamata); // 1 min
chiamante.azzeraChiamate();
console.log(chiamante.getNumeroChiamata); // 1 min
