
 export const SubmitCall =(credensials,history)=>{

    const {name,email,password} = credensials;
  
  
    const regForm = history.location.pathname === '/register' ? true:false;
    const url = regForm?`register`:`signin`;

    const objJson = regForm?{name,email,password}:{email,password}
  
      return fetch(`https://agile-atoll-31330.herokuapp.com/${url}`,
      {
        method:'post',
        mode: 'no-cors',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(objJson)
      })
    .then(data=>data.json())
    .then(data => {
      
      data.hasOwnProperty('id')?history.push('/face'):null
  
      return data
    }
      )
  }
  