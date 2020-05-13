import React from 'react';
//import './FaceRecognition.css';


class Register extends React.Component {

constructor(props){
  super(props);

  this.state = {
    name:'',
    email:'',
    password:'',
  }

}

   onEmailChange =(event)=>{
     this.setState({email:event.target.value});
   }

   onPasswordChange =(event)=>{
     this.setState({password:event.target.value});
   }

   onNameChange =(event)=>{
     this.setState({name:event.target.value});
   }

  onFormSubmit=()=>{
    console.log('state',this.state);

    fetch('https://agile-atoll-31330.herokuapp.com/register',
      {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          email:this.state.email,
          password:this.state.password,
          name:this.state.name
        })
      })
    .then(data=>data.json())
    .then(user=>{
      console.log('register',user);
      this.props.loadUser(user);
      this.props.onRouteChange('home');
  })
}


  render(){

  return (
    <article className="br3 ba dark-gray bg-white-20 b--black-50 mv4 w-50-m w-25-l shadow-5 mw6 center">
    <main className="pa4 black-70">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input
            onChange={this.onNameChange}
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="text" name="name"  id="name" />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input
                onChange={this.onEmailChange}
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="email" name="email-address"  id="email-address" />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input
                onChange={this.onPasswordChange}
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="password" name="password"  id="password" />
          </div>
        </fieldset>
        <div className=" ">
          <input onClick={this.onFormSubmit} className=" pointer b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
        </div>
      </div>
</main>
</article>
  );
}
}


export default Register;
