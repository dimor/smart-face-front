import {ImageLinkFormActionTypes} from './image_link_form.types';

export const SubmitCallLinkForm=(imageUrl,dispatch)=>{


    return fetch('https://agile-atoll-31330.herokuapp.com/imageUrl',{

      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        input:imageUrl
      })

    })
    .then(response=> response.json())
  }   
    
  



export const calculateFaceLocation=(data)=>{
      
        const regions = data.outputs[0].data.regions;
      
        const image = document.getElementById('inputimage');
        
        const width = Number(image.width);
        
        const height = Number(image.height);
        
        const bounded_faces = regions.map(region => {
        
              const clarifaiFace = region.region_info.bounding_box;
              return{
                leftCol:clarifaiFace.left_col * width,
                topRow:clarifaiFace.top_row *height,
                rightCol:width - (clarifaiFace.right_col*width),
                bottomRow: height - (clarifaiFace.bottom_row*height)
              }
          })
        
          return bounded_faces;
          
  }
  


  export const IncrementCall=(user,dispatch)=>{
    dispatch({type:ImageLinkFormActionTypes.INCREMENT_SUBMIT_PENDING});

    fetch('https://agile-atoll-31330.herokuapp.com/image',{

      method:'put',
      headers:{'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, OPTIONS, DELETE'},
      body:JSON.stringify({
        id:user.id
      })

    })
    .then(response=>response.json())
    .then(data=>{

      return {...user,entries: data}
    })
    .then(data => dispatch({ type: ImageLinkFormActionTypes.INCREMENT_SUBMIT_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: ImageLinkFormActionTypes.INCREMENT_SUBMIT_FAILED, payload: error }))
  }



  export const UploadCall =(file,dispatch)=>{

    const formData = new FormData();

    formData.append('file', file);
    formData.append('randomname', 'randomname');

    const options = {
      method: 'POST',
      body:formData
    }

    return fetch('https://cors-anywhere.herokuapp.com/https://uguu.se/api.php?d=upload-tool',options)
    .then(response => {

     return response.text()
    })
   
    
  }
  
  

