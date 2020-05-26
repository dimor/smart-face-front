export const calculateFaceLocation=(data)=>{

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



    
export const displayFaceBox =(boxes)=>{

  this.setState({boxes:boxes});

}


 export const onInputChange=(e)=>{

    this.setState({input:e.target.value})

  }


 export const  onButtonSubmit=()=>{

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



