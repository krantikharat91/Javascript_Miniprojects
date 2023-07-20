let x= document.getElementById("cel");
let y= document.getElementById("fah");
x.addEventListener('input',myFun);
y.addEventListener('input',myFun2);
function myFun()
{
    let c = this.value;
    let f= (c*1.8)+32;
    if(!Number.isInteger(f))    //isInteger = checking whether number is integer or not
    {
        f = f.toFixed(4);   // fixing the size of the decimals to 4
    }
    y.value= f;

};
function myFun2()
{
    let f = this.value;
    let c = (f-32)/1.8;
    if(!Number.isInteger(c))    //isInteger = checking whether number is integer or not
    {
        c = c.toFixed(4);   // fixing the size of the decimals to 4
    }
    x.value = c;
};