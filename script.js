let endpoint=new XMLHttpRequest()

const outputEl= document.querySelector(".advice")
const idEl=document.querySelector(".id")
const btn= document.querySelector(".btn")

btn.addEventListener("click",()=>{
  endpoint.open('GET','	https://api.adviceslip.com/advice')
endpoint.send()
endpoint.onload=()=>{
  if(endpoint.status===200){
console.log(endpoint.response)
    const result=JSON.parse(endpoint.responseText)
    outputEl.innerText=result.slip.advice
    idEl.innerText=  "ADVICE" +" " +"#"+ result.slip.id
  }else{
    throw Error(endpoint.statusText)
    alert("Error")
  }
}
})