let box = ""
let num = +prompt("Enter number of Diagonal: ")
for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {  
        if(i==j || i == 0 || j == 0 || i == num -1 || j == num -1){
            box += "◼️"
        } else{
            box += "◻️"
        }
    }
    console.log(box)
    box = ""
}