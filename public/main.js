

function OnSubmit(e){
  e.preventDefault();

  document.querySelector('#image-main').src=''
const prompt= document.querySelector('#Img-descrpt').value
const size=document.querySelector('#size').value

if(!prompt){
    alert("Please insert input....")
}
  ImagegeneratorApicall(prompt,size)
  
}

async function ImagegeneratorApicall(prompt, size){

    try{
      showspinner()
       const response= await fetch("/openai/imagegeneratorai", {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            prompt,
            size
        })
       })

       const data=await response.json()
       const imageurl=data.data
       document.querySelector('#image-main').src=imageurl
       removespinner()
       document.querySelector('#text-gen').textContent="Generated Image-->"
       
    }catch(err){

    }
}

function showspinner(){
  
  document.querySelector('.spinner').classList.add('show')
  
}
function removespinner(){
  document.querySelector('.spinner').classList.remove('show')
}

document.querySelector('#main-form').addEventListener('submit', OnSubmit)