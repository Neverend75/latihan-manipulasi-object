var jualMobil = {
    iklan:function(){
        document.write(`BU , saya ${this.nama}, jual mobil ${this.merek} , tahun ${this.tahun} ,bekas`);
    }
   }

var saya = Object.create(jualMobil)

saya.nama = 'Tompel',
saya.merek = 'Avanza',
saya.tahun = 2017
saya.iklan()
