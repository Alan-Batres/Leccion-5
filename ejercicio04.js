function esImpar(){
    let array = [3, 2, 6, 4, 8];
    let isOdd = value => value % 2 != 0;
    console.log(array.some(isOdd));
}
