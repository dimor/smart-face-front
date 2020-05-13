import React,{Component} from 'react';
//import './FaceRecognition.css';


class SignIn extends Component {

    constructor(props){
      super(props);
      this.state = {
        email:'',
        password:''
      }
    }


 onEmailChange =(event)=>{
   this.setState({email:event.target.value});
 }

 onPasswordChange =(event)=>{
   this.setState({password:event.target.value});
 }

onFormSubmit=()=>{
  console.log('state',this.state);

  fetch('https://agile-atoll-31330.herokuapp.com/signin',
    {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    })
  .then(data=>data.json())
  .then((user)=>{

    if(user.id){
      this.props.loadUser(user);
      this.props.onRouteChange('home')
    }
    else
    {
      alert('error wrong combination');
    }
  })
}


  render(){

    const{onRouteChange} = this.props;

  return (
    <article className="br3 ba dark-gray bg-white-20 b--black-50 mv4 w-100-m shadow-5 mw6 center">
    <main className="pa4 black-70">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="current-password" name="password"  id="password" />
          </div>
        </fieldset>
        <div className="">
          <input
          onClick={this.onFormSubmit}
           className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
        </div>
        <div className="lh-copy mt3">
          <p onClick={()=>onRouteChange('register')} className="pointer f6 link dim black db">Register</p>
        </div>
      </div>
</main>
</article>
  );
}
}

export default SignIn;
