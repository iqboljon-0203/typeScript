// console.log("Hello")
// console.log(!true);

// throw new Error("Some error")
let first=document.getElementById("first") as HTMLInputElement;
let second=document.getElementById("second") as HTMLInputElement;

function sum(a:number,b:number){
    console.log(+first.value+(+second.value));
}

