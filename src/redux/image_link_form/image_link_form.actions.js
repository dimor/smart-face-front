import {ImageLinkFormActionTypes} from './image_link_form.types';
import {SubmitCallLinkForm,calculateFaceLocation,IncrementCall,UploadCall} from './image_link_form.utils';

export const OnChangeImageLink =(text)=>({

    type: ImageLinkFormActionTypes.ON_CHANGE_IMAGE_LINK,
    payload:text

});




export const SubmitLinkForm=(imageUrl,user)=>(dispatch)=>{
    dispatch({type:ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_PENDING});
    window.scrollTo(0,document.body.scrollHeight);
    SubmitCallLinkForm(imageUrl,dispatch)
    .then(data=>{
        if(data.outputs[0].data.hasOwnProperty('regions')){
            return data;
        }else{
            throw Error('Sorry we could not detect any faces in your picture :(' )
        }
    })
    .then(data=>calculateFaceLocation(data))
    .then(IncrementCall(user,dispatch))
	.then(data => dispatch({ type: ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_FAILED, payload: error }))
  
}


export const UploadLinkForm=(file)=>(dispatch)=>{
    dispatch({type:ImageLinkFormActionTypes.IMAGE_LINK_FORM_UPLOAD_PENDING});
    UploadCall(file)
    .then(response => dispatch({type:ImageLinkFormActionTypes.IMAGE_LINK_FORM_UPLOAD_SUCCESS,payload:response}))
    .catch(error => dispatch({type:ImageLinkFormActionTypes.IMAGE_LINK_FORM_UPLOAD_FAILED,payload:error}))

}



