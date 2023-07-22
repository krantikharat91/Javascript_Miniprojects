function changeBg(clr){
    document.body.style.backgroundColor = clr;
    let text = document.getElementsByClassName("text");
    if(clr == '#000000')
    {
        for(let elm of text)
        {
            elm.style.color = "white";
        }
    }
    else
    {
        for(let elm of text)
        {
            elm.style.color = "black";
        }

    }
}