let number_1 = parseInt(prompt("Moi nhap so thu nhat:"));
let number_2 = parseInt(prompt("Moi nhap so thu hai:"));
let max;
let min;
let total = 0;

if (number_1>=number_2){
    max = number_1;
    min = number_2;
} else {
    min = number_1;
    max = number_2;
};

for (let number = min; number <= max; number +=1){
    let number_count = 0;
    for(let i=1; i <= number; i+=1){
        if (number%i == 0){
            number_count += 1
        }
    }
    if (number_count <= 2){
        total = total + number;
    }
}
const para = document.createElement("p");
const node = document.createTextNode(`Ket qua la: ${total}`);
para.appendChild(node);

const element = document.getElementById("container");
element.appendChild(para);