//Soal 3
function hitungRataRata(n1, n2, n3){
    return (n1 + n2 + n3) /3
}

function tentukanPredikat(rata){
    if (rata >= 85){
        return 'A';
    } else if (rata >= 75){
        return 'B';
    } else if (rata >= 60){
        return 'C';
    } else {
        return 'D'
    }
}

function cetakRapor(nama, n1, n2, n3){
    let rata = hitungRataRata(n1,n2,n3);
    let predikat = tentukanPredikat(rata);

    console.log('Nama: ' +nama);
    console.log('Rata-rata: '+rata.toFixed(2));
    console.log('Predikat: '+predikat);
    console.log('============================')
}

cetakRapor('Zahira', 80, 82, 85);
cetakRapor('Alifia', 90, 88, 92);
cetakRapor('Isabela', 65, 70, 68);