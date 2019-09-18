var ri, rj;

function dividir(x) {
    let sumaNum = 0;
    for (let k = 1; k <= Math.floor(x / 2) + 1; k++) {
        if (x % k == 0) {
            sumaNum = sumaNum + k;
        }
    }
    return sumaNum;
}

for (let i = 2; i <= 3000; i++) {
    ri = dividir(i);
    for (let j = i; j <= 3000; j++) {
        rj = dividir(j);
        if (ri == j && rj == i) {
            console.log(i, "y", j, "son amigos");
        }
    }
}