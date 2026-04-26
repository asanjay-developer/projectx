var products = document.getElementById("productss")
var search = document.getElementById("search")
var productslist = products.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enter_text = event.target.value
    for(var i  = 0 ; i<productslist.length; i++){
        var pname = productslist[i].querySelector('p').textContent
        if(pname.indexOf(enter_text) < 0 )
        {
            productslist[i].style.display = "none"
        }
        else
        {
            productslist[i].style.display = "block"
        }
    }
})