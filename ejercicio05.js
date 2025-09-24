function PrimerImpar(){
    let array = [4, 2, 8, 7, 9];
    let FirstOdd = value => value % 2 != 0;
    console.log(array.find(FirstOdd));
}
