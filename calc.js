function getInput(num){

  // input  tag always returns string
  result.value +=num
}

function clearAll(){
  result.value = ""
}

function backbtn(){
  result.value=result.value.slice(0,-1)
}

function equal(){
  try {
    result.value=eval(result.value)
  } catch  {
    result.value='error'
    setTimeout(()=>{
      result.value=''
    },1000)
  }
}