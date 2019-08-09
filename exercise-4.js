var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

// console.log(input[3])

function dataHandling2(input){
    var tampung = []
    
    tampung = input
    
    return tampung
}

console.log(dataHandling2(input))


console.log('-------------------------------------------------------')


input.splice(2, 5, "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

console.log(input)

var ttl = input[3]
console.log(ttl)


var pisah = ttl.split("/")
console.log(pisah)

var tanggal = pisah[0]
// console.log(tanggal)

var bulan = pisah[1]
// console.log(bulan)
var bulanInt = parseInt(bulan);

var tahun = pisah[2]
// console.log(tahun)


var bulanKata = ''
switch(bulanInt){
    case 01: 
        bulanKata = 'Januari'
        break;
    case 02:
        bulanKata = 'Februari'
        break;
    case 03:
        bulanKata = 'Maret'
        break;
    case 04:
        bulanKata = 'April'
        break;
    case 05:
        bulanKata = 'Mei'
        break;
    case 06:
        bulanKata = 'Juni'
        break;
    case 07:
        bulanKata = 'Juli'
        break;
    case 08:
        bulanKata = 'Agustus'
        break;
    case 9:
        bulanKata = 'September'
        break;
    case 10:
        bulanKata = 'Oktober'
        break;
    case 11:
        bulanKata = 'Nopember'
        break;
    case 12:
        bulanKata = 'Desember'
        break;
}


var gabungan = [];
gabungan.push(tanggal, bulanKata, tahun)
console.log(gabungan)

gabungan.sort();
console.log(gabungan)

console.log(gabungan.join('-'))


var kota = input[2]
console.log(kota, typeof kota)
var potongan = kota.slice(0, 15)
console.log(potongan)