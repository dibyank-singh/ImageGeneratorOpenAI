
function OnSubmit(e){
  e.preventDefault();

const prompt= document.querySelector('#Img-descrpt').value
const size=document.querySelector('#size').value

if(!prompt){
    alert("Please insert input....")
}
  ImagegeneratorApicall(prompt,size)
  
}

document.querySelector('#main-form').addEventListener('submit', OnSubmit)