const makanan = {
  rasa: "false",
  deskripsi: function () {
    document.write(
      `Makanan ini adalah ${this.nama}. apakah ini pedes ? ${this.rasa}. berapa harganya? ${this.harga} `
    );
  },
};

makanan.nama = "Gado-gado";
makanan.rasa = true;
makanan.harga = 8000;
makanan.deskripsi();

document.write("<br>");
document.write("<br>");

let makanankhas = {
  penjual: "fulan",
  namaMakanan: "Ubi Cilembu",
  provinsi: "jawa Barat",
  daerah: "Sumedang",
  hargakiloan: 12000,
  jual: function () {
    document.write(
      `Halo saya ${this.penjual}. saya adalah penjual ${this.namaMakanan}. ini adalah makanan khas dari ${this.provinsi} tepatnya dari kabupaten ${this.daerah} dan harganya ${this.hargakiloan}`
    );
  },
};
makanankhas.jual();

document.write("<br>");
document.write("<br>");

let jasa = {
  namajasa: "pasang antena",
  wilayah: "Jakarta dan Bekasi",
  tlp: 0812345678910,
  waktu: "2 - 3 jam",
  order: function () {
    document.write(
      `Menerima jasa ${this.namajasa} untuk wilayah ${this.wilayah}, untuk pemanggilan bisa menghubungi ${this.tlp}, estimasi pengerjaan ${this.waktu}`
    );
  },
};
jasa.order();

document.write("<br>");
document.write("<br>");

let santri = {
  nama: "David",
  pondok: "Programmer",
  divisi: "Mobile Depelovment",
  usia: 19,
  data: function () {
    document.write(
      `Namanya adalah ${this.nama} dia seorang santri di Pondok ${this.pondok}, dia mengambil jurusan ${this.divisi}, sekarang dia berusia ${this.usia}`
    );
  },
};
santri.data();

document.write("<br>");
document.write("<br>");

let mart = {
  barang: "sabun",
  jumlah: 10,
  toko: "Meriah",
  uang: 30000,
  produk: function () {
    document.write(
      `Nak! tolong belikan ibu ${this.barang} sebanyak ${this.jumlah} di toko ${this.toko}, ini uangnya ${this.uang}`
    );
  },
};
mart.produk();

document.write("<br>");
document.write("<br>");
