let number = parseInt(prompt("Moi nhap so trong khoang 1-10:"));

if (number<1 || number>10){
    const para = document.createElement("p");
    const node = document.createTextNode("Gia tri khong hop le");
    para.appendChild(node);

    const element = document.getElementById("container");
    element.appendChild(para);
} else {
    for (let i=1; i <= number; i+=1){
        let row = "";
        for (let j=1; j <= i; j +=1){
            row = row + "*"
        };
        const para1 = document.createElement("p");
        const node1 = document.createTextNode(`${row}`);
        para1.appendChild(node1);

        const element = document.getElementById("container");
        element.appendChild(para1);
    };
};
