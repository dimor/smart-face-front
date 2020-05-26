
 export const SignInSubmitCall =(credensials,history)=>{

  const {email,password} = credensials;


  console.log('urils',history)

    return fetch('https://agile-atoll-31330.herokuapp.com/signin',
    {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
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
