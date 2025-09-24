function posicionPar(){
   let array = [5, 2, 3, 1];
   let FirstEvenPosition = array => {
        for (let num of array){
            if(num % 2 == 0){
                return array.indexOf(num);
            }
        }
    }
    console.log(FirstEvenPosition(array));
}