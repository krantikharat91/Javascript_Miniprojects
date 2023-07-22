let textbox = document.getElementById("txtbox");
textbox.addEventListener("input",function(){
    var text = this.value;
    // console.log(text);

    //character counter
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    //word counter
    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(elm){
        return elm != "";
    })
    // console.log(words);
    document.getElementById("word").innerHTML = cleanList.length;
});