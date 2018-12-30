// function getLog(){
//     return console.log(0);
// }
// getLog();
// function getlog(fn){
//     fn(1);
// }
// getlog(console.log());
// var a = 6;
// var b = 5;
// a > b <=> a - b
// a < b <=> b - a
// if(a - b){
//     console.log("A lon B");
// }
// function inSochan(){
//     for(let i = 0 ; i <= 100 ; i+=2) console.log(i);
// }
// function inSole(){
//     for(let i = 1 ; i<= 100 ; i+=2) console.log(i);
// }
// function inSochia3du1(){
//     for(let i = 1 ; i<= 100 ; i+=3) console.log(i);
// }
// function inSochinhphuong(){
//     for(let i = 1 ; i<= 100 ; i++) console.log( i * i);
// }

function inSochan(){
    for(let i = 0 ; i<= 100 ; i++){
        const dk = i % 2 === 0;
        if(dk) console.log(i);
    }
}
function inSole(){
    for(let i = 0 ; i<= 100 ; i++){
        const dk = i % 2 === 1;
        if(dk) console.log(i);
    }
}
function inSochia3du1(){
    for(let i = 1 ; i<= 100 ; i++){
        const dk = i % 3 === 1;
        if(dk) console.log(i);
    }
}
function inSochinhphuong(){
    for(let i = 1 ; i<= 100 ; i++){
       const dk = Math.sqrt(i) % 1 === 0 ;
        if(dk) console.log(i);
    }
}
function inSo(fn){
    for(let i = 0 ; i<= 100 ; i++){
        const dk = fn(i);
        if(dk){
            console.log(i);
        }
    }
}

// inSochinhphuong();
// inSochia3du1();
// inSo(2 ,0);
inSo(i => Math.sqrt(i) % 1 === 0);
// inSochan();
// inSole();
// inSochia3du1();
// inSochinhphuong();