function IncluyeValor() {
    const card = 3;
    const array = [2, 3, 4, 5];
    let includesValue = (card,array) => array.includes(card) ? true : false;
    console.log(includesValue(card,array));

}
