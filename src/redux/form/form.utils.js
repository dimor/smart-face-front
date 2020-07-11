import {FormActionTypes} from './form.types';

 export const SubmitCall =(credensials,history,dispatch)=>{

    const {name,email,password} = credensials;
    const regForm = history.location.pathname === '/register' ? true:false;


      const url = regForm?`register`:`signin`;

      const objJson = regForm?{name,email,password}:{email,password}
    
        return fetch(`https://cors-anywhere.herokuapp.com/https://agile-atoll-31330.herokuapp.com/${url}`,
        {
          method:'post',
          mode: 'cors',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(objJson)
        })
      .then(data=>data.json())
      .then(data => {
        
        if (data.hasOwnProperty('id')){
          window.sessionStorage.setItem('user',JSON.stringify(data));
          history.push('/face')
          return data
        }else{

          if(regForm)
          {
            throw Error('Something went wrong , please try again.')
          }else{

            throw Error('The combination of email and password you have entered is incorrect.')
          }

        }
      }
        )
   
    }



  export const validateForm =(credensials,history)=>{

    const {name,email,password} = credensials;
    const regForm = history.location.pathname === '/register' ? true:false;


    if(checkIfEmpty(credensials,regForm)===false)
    {
        return Error('Please fill in the required fields.') ;

    }else{
      if(validateEmail(email)){
        return true;
      }else{
       return Error('Invalid Email') ;
      }
    }
  }
    


  const isEmpty=(str)=> {
    return (!str || 0 === str.length);
  }


  const validateEmail=(email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const checkIfEmpty =({name,email,password},regForm)=>{
    if(regForm){
      return isEmpty(name)||isEmpty(email)||isEmpty(password)?false:true
    }else{
      return isEmpty(email)||isEmpty(password)?false:true
    }
  }
