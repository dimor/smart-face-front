
 export const RegisterSubmitCall =(credensials,history)=>{

  const {name,email,password} = credensials;




    return fetch('https://agile-atoll-31330.herokuapp.com/register',
    {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name,
        email,
        password
      })
    })
  .then(data=>data.json())
  .then(data => {
    
    data.hasOwnProperty('id')?history.push('/'):null

    return data
  }
    )
}
