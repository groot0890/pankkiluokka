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
      throw new Error("Saldo ei riitä.");
    }

    this.saldo -= summa;
    this.historia.push({
      paivamaara: new Date(),
      tapahtuma: "Nosto",
      summa: summa,
      saldoEnnenTapahtumaa: this.saldo + summa,
    });
  }

  näytäTiedot() {
    console.log("Tilinumero:", this.tilinumero);
    console.log("Saldo:", this.saldo);
    console.log("Historia:");
    this.historia.forEach(tapahtuma => {
      console.log("  Päivämäärä:", tapahtuma.paivamaara);
      console.log("  Tapahtuma:", tapahtuma.tapahtuma);
      console.log("  Summa:", tapahtuma.summa);
      console.log("  Saldo ennen tapahtumaa:", tapahtuma.saldoEnnenTapahtumaa);
    });
  }

  näytäHistoria() {
    console.log("Historia:");
    this.historia.forEach(tapahtuma => {
      console.log("  Päivämäärä:", tapahtuma.paivamaara);
      console.log("  Tapahtuma:", tapahtuma.tapahtuma);
      console.log("  Summa:", tapahtuma.summa);
      console.log("  Saldo ennen tapahtumaa:", tapahtuma.saldoEnnenTapahtumaa);
    });
  }
}
const pankki = new Pankki("1234-5678-9012-3456");

pankki.talleta(100);
pankki.nosta(50);

pankki.näytäTiedot();
