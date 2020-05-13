import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';


const particlesOptions = {

    particles:{
      number:{
        value:50,
        density:{
          enable:true,
          value_area:900
        }
      }
    }
  }

const initialState = {

    input:'',
    imgUrl:'',
    boxes:[],
    route:'signin',
    isSignedIn: false,
    user:{
      id:'',
      name:'',
      email:'',
      password:'',
      entries:0,
      joined:''

    }


}


class App extends Component {

  constructor(){
    super();
    this.state= initialState;

  }

loadUser=({id,name,email,password,entries,joined})=>{

      this.setState({user:{
        id,
        name,
        email,
        password,
        entries,
        joined
      }})

      console.log(this.state.user);

}






calculateFaceLocation=(data)=>{

const regions = data.outputs[0].data.regions;

const image = document.getElementById('inputimage');

const width = Number(image.width);

const height = Number(image.height);

const bounded_faces =  regions.map(region => {

      const clarifaiFace = region.region_info.bounding_box;
      console.log(clarifaiFace);
      return{
        leftCol:clarifaiFace.left_col * width,
        topRow:clarifaiFace.top_row *height,
        rightCol:width - (clarifaiFace.right_col*width),
        bottomRow: height - (clarifaiFace.bottom_row*height)
      }
  })

  return bounded_faces;

}


displayFaceBox =(boxes)=>{

  this.setState({boxes:boxes});

}



  onInputChange=(e)=>{

    this.setState({input:e.target.value})

  }


  onButtonSubmit=()=>{

    this.setState({imgUrl:this.state.input})


    fetch('https://agile-atoll-31330.herokuapp.com/imageUrl',{

      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        input:this.state.input
      })

    })
    .then(response=> response.json())

    .then(response=>{

        if(response){

          this.displayFaceBox(this.calculateFaceLocation(response))

          fetch('https://agile-atoll-31330.herokuapp.com/image',{

            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              id:this.state.user.id
            })

          })
          .then(response=> response.json())
          .then(count =>{
              this.setState(Object.assign(this.state.user,{entries:count}));
          })
          .catch(console.log)

        }


    })
    .catch(err =>console.log(err));

  }


  onRouteChange=(route)=>{
    if(route==='signout'){
      this.setState(initialState);
      this.setState({isSignedIn:false})

    }else if(route==='home') {
          this.setState({isSignedIn:true})
    }

    this.setState({route:route});
  }


  //
  // componentDidMount(){
  //
  //   fetch('http://localhost:3001')
  //     .then(response=>response.json())
  //     .then(console.log);
  //
  // }



  render(){

    const {isSignedIn,imgUrl,route,boxes} = this.state;

  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}/>
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      {
      route==='home'?
      <React.Fragment>
      <Logo />
      <Rank name={this.state.user.name} entries={this.state.user.entries}/>
      <ImageLinkForm
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit} />
      <FaceRecognition boxes={boxes} imgUrl={imgUrl}/>
      </React.Fragment>
        :
          (route==='signin' || route==='signout'?
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />  :
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
      }
    </div>
  );
}
}
export default App;
