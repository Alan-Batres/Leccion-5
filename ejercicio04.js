function esImpar(){
    let array = [3, 2, 6, 4, 8];
    let isOdd = array => {
        for (let num of array){
            if (num % 2 == 0){
                return true
            } else {
                return false
            }
        }
    }
    console.log(isOdd(array));
}