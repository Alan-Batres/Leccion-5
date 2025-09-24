function PosicionCarta(){
    const card = 2;
    let array = [9, 7, 3, 2];
    let position = (card,array) => array.indexOf(card);
    console.log(position(card,array));
}