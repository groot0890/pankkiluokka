class Pankki {
  constructor(tilinumero) {
    this.tilinumero = tilinumero;
    this.saldo = 0;
    this.historia = [];
  }

  talleta(summa) {
    this.saldo += summa;
    this.historia.push({
      paivamaara: new Date(),
      tapahtuma: "Talletus",
      summa: summa,
      saldoEnnenTapahtumaa: this.saldo - summa,
    });
  }

  nosta(summa) {
    if (this.saldo < summa) {
      console.error("Saldo ei riitä.");
      return;
    }

    this.saldo -= summa;
    this.historia.push({
      paivamaara: new Date(),
      tapahtuma: "Nosto",
      summa: summa,
      saldoEnnenTapahtumaa: this.saldo + summa,
    });
  }

  tarkistaTilinumeroValidius(tilinumero) {
    const tilinumeronPituus = tilinumero.length;
    const tilinumeronAlku = tilinumero.substring(0, 2);
    const tilinumeronLoppu = tilinumero.substring(tilinumeronPituus - 2);

    if (tilinumeronPituus !== 16) {
      return false;
    }

    if (tilinumeronAlku !== "12") {
      return false;
    }

    if (tilinumeronLoppu !== "34") {
      return false;
    }

    return true;
  }

  onkoRahaaNostettavaksi(summa) {
    const tilinumero = prompt("Anna tilinumero: ");

    if (!this.tarkistaTilinumeroValidius(tilinumero)) {
      return false;
    }

    return this.saldo >= summa;
  }

  lisaaKorko() {
    const korko = 0.05;
    this.saldo += this.saldo * korko;
  }

  tarkistaLuottoraja() {
    const nettotulot = prompt("Anna nettotulot: ");
    const luottoraja = nettotulot * 0.25;

    return luottoraja;
  }
}

class NostavaPankki extends Pankki {
  constructor(tilinumero) {
    super(tilinumero);
  }

  onkoRahaaNostettavaksi(summa) {
    const tilinumero = prompt("Anna tilinumero: ");

    if (!this.tarkistaTilinumeroValidius(tilinumero)) {
      return false;
    }

    return this.saldo >= summa;
  }
}
const pankki = new NostavaPankki("1234-5678-9012-3456");

pankki.talleta(1000);

pankki.lisaaKorko();

console.log(pankki.saldo); // 1050

const luottoraja = pankki.tarkistaLuottoraja();

console.log(luottoraja); // 262.50
