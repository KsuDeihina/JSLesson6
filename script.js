let mas = [];
for(let i = 0; i < Infinity; i++){
    let a = prompt('Введите команду');
    let arr = a.split(' ');
    let b = arr[0];
    let c = arr[1]; 
    if(b == 'add,'){
        mas.push(c);
    } else if(b == 'del,'){
        let d = mas[i] == c ? i : '';
        mas.splice(d, 1)
    } else if (b == 'stop'){
        break
    } 
    console.log(mas);
}
console.log(mas);