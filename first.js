
// console.log("hello");
// var a = "hello"
// console.log(a.replace("hell","well"))
// let d = "heleelele";
// const j  ="jjello"
// console.log(j)
// let arr = [1,2,3,5,7,9,"hello",undefined,null];
// let empl = {
//     name :"name",
//     salary : 4000000,
//     hobby :"programming",
// };
// arr.push("43");
// arr[0] = 98;
// console.log(arr);
// console.log(empl);
// console.log(empl['name']);
// function sum(a=3,b=3){
//     console.log(a+b);
// }
// sum();
// alert("Hello);
// let nam = prompt("Tell your name now","Guest");
// console.log(nam);
// let deletepage = confirm("Yes or no");
// if(deletepage){
//     console.log("Ok")
// }
// else{
//     console.log("no son")
// }

// let st = "hello";
// let age = prompt("whats your age son");
// if(age>=18){
//     console.log("Welcome");
// }
// else{
//     alert("NO");
// }
// let f = ["r","h","j","k"]
// f.forEach(function f1(element){
//     console.log(element)
// })
// let emp = {
//     name:"aayush",
//     sal:9000000,
//     positon:69,
// }
// for(ele in emp){
//     console.log(`${ele} is ${emp[ele]}`)
// }
// f.forEach(element => {
//     console.log(element);  
// });
// for (const iterator of f) {
//     console.log(`${iterator} is this`)
// }
//js.html
// let js = document.getElementById('nav')
// console.log(js.innerHTML);
// // js.innerHTML = `
// // <li>Home</li>
// // <li>About</li>
// // `;
// let con = document.getElementsByClassName('con');
// // con[0].innerHTML = "First container
// con[1].innerHTML = "SECOND CONTAINER"
// let css = document.querySelector(".con");
// let fk = document.querySelector("#nav>li:nth-child(3)");
// fk.innerHTML="<li>changed</li>"
// let loop = document.getElementById('lk');
// let items = loop.getElementsByTagName('li');
// for(i = 0;i<items.length;i++){
//     console.log(items[i].innerHTML);
// }
let btn = document.getElementById("btnn");
let hea = document.getElementById("head");
hea.addEventListener('mouseover',function change(){
        hea.style.backgroundColor = 'black';
        hea.style.color = 'white';
        hea.style.textAlign = 'center';
        hea.style.transition = '0.6s ease-in';
});
hea.addEventListener('mouseout',function ch(){
    hea.style.color = 'black';
    hea.style.backgroundColor = 'white';
    hea.style.textAlign = 'left';
});
function hide() {
    let head = document.getElementById("head");
    if(head.style.display !='none'){
        head.style.display = 'none';
    }
    else{
        head.style.display = 'block';
    }
}
let ch = document.getElementById("color");
ch.innerHTML = "Dark Mode";
ch.addEventListener('click',function ch(){
    if(body.style.backgroundColor != 'black'){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
    else{
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
});