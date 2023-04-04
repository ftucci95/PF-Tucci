var collV = document.getElementsByClassName("collapsibleVader");
var i;

for (i = 0; i < collV.length; i++) {
  collV[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var collK = document.getElementsByClassName("collapsibleKinder");
var i;

for (i = 0; i < collK.length; i++) {
  collK[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

fetch("<link>")
.then(function(response){
    return response.json();
})
.then(function(products)){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let product of products){
        out += `
        <tr>
            <td> ${product.name} </td>
            <td> ${product.status} </td>
        </tr>
        `;
        
        
    }
}