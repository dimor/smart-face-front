import {ImageLinkFormActionTypes} from './image_link_form.types';
import {SubmitCallLinkForm,calculateFaceLocation,IncrementCall} from './image_link_form.utils';

export const OnChangeImageLink =(text)=>({

    type: ImageLinkFormActionTypes.ON_CHANGE_IMAGE_LINK,
    payload:text

});




export const SubmitLinkForm=(imageUrl,user)=>(dispatch)=>{
    dispatch({type:ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_PENDING});
    SubmitCallLinkForm(imageUrl)
    .then(data=>calculateFaceLocation(data))
    .then(IncrementCall(user,dispatch))
	.then(data => dispatch({ type: ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_SUCCESS, payload: data }))
	.catch(error => dispatch({ type: ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_FAILED, payload: error }))
}



