



let main= document.getElementById("hoverbutton");


main.addEventListener("mouseover",function(){
    document.getElementById("hovermesseage").innerText="hello i am ayesha";
});

main.addEventListener("mouseout",function(){
    document.getElementById("hovermesseage").innerText="";

});