interface Smartphone {
  credito: number;
  numeroChiamate: number;
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number = 0;
  numeroChiamate: number = 0;
  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
  }
  ricarica(valore: number): void {
    this.credito = this.credito + valore;
  }
  chiamata(durata: number): void {
    if (this.credito - (durata * 0.20) < 0) {
      console.log("non hai abbastanza credito");
    } else {
      this.credito = this.credito - (durata * 0.20); // prettier-ignore
      this.numeroChiamate = this.numeroChiamate + 1;
    }
  }
  get chiama404(): number {
    return this.credito;
  }
  get getNumeroChiamata(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const chiamante = new User("Mario", "Rossi");
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
