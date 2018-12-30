// const hocsinh = ["Teo" , "Ti" , "Tun" , "Ty"];
// Xóa ở cuối 
// hocsinh.pop();
//Xóa ở đầu 
// hocsinh.shift();
//Thêm ở cuối
// hocsinh.push("Hoa");
// Thêm ở đầu
// hocsinh.unshift("Hoa");
// console.log(hocsinh);

const numbers = [1, 3, 2, 5, 7, 4, 6, 9, 8];
const hocsinh = [
    { name: "Teo", age: 10 },
    { name: "Ti", age: 9 },
    { name: "Tun", age: 12 },
]
// console.log(numbers.map(x => x * x));
// Viết thêm phương thức cho Array
Array.prototype.mymap = function (fn) {
    const outter = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        outter.push(fn(element));
    }
    return outter;
}

// console.log(numbers.mymap(x => x * x));

Array.prototype.myfilter = function (fn) {
    const outter = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (fn(element)) outter.push(element);
    }
    return outter;
}
console.log(hocsinh.myfilter(hocsinh => hocsinh.age >= 10));
// console.log(hocsinh.filter(hocsinh => hocsinh.age >= 10));