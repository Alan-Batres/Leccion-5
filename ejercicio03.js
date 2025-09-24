function EsPar(){
    let array = [2, 4, 6, 7];
    let isEven = array => {
        for (let num of array){
            if(num % 2 != 0){
                return true;
            }else{
                return false
            }
        }
    }
    console.log(isEven(array));
}
