function posicionPar(){
   let array = [5, 2, 3, 1];
   let FirstEvenPosition = value => value % 2 == 0;
   console.log(array.findIndex(FirstEvenPosition));
}
