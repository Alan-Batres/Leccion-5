function PrimerImpar(){
    let array = [4, 2, 8, 7, 9];
    let FirstOdd = array => {
        for (let num of array){
             if (num % 2 != 0){ 
                return num;
                }
            }
        }
    console.log(FirstOdd(array));
}