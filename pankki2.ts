class NostavaPankki extends Pankki {
    constructor(tilinumero) {
      super(tilinumero);
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
  }
  const pankki = new NostavaPankki("1234-5678-9012-3456");

  const onkoRahaaNostettavaksi = pankki.onkoRahaaNostettavaksi(100);
  
  console.log(onkoRahaaNostettavaksi); // true
  