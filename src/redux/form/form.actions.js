import {FormActionTypes} from './form.types';
import {ImageLinkFormActionTypes} from './../image_link_form/image_link_form.types';
import {SubmitCall,validateForm} from './form.utils';

export const OnChangeName=(text)=>({

	type: FormActionTypes.ON_CHANGE_NAME_FIELD,
	payload: text


});


export const OnChangeEmail=(text)=>({

	type: FormActionTypes.ON_CHANGE_EMAIL_FIELD,
	payload: text


});


export const OnChangePassword=(text)=>({

	type: FormActionTypes.ON_CHANGE_PASSWORD_FIELD,
	payload: text


});


export const OnSubmit=(credentials,history)=>(dispatch)=>{
	console.log('submit',credentials)


const responseValidation = validateForm(credentials,history);


console.log('res',responseValidation);



	if(responseValidation === true){
		dispatch({type:FormActionTypes.SUBMIT_PENDING});
		SubmitCall(credentials,history,dispatch)
		.then(data => dispatch({ type: FormActionTypes.SUBMIT_SUCCESS, payload: data }))
		.catch(error => {
			dispatch({ type: FormActionTypes.SUBMIT_FAILED, payload: error })
		})
	}else{
		dispatch({ type: FormActionTypes.SUBMIT_FAILED, payload: responseValidation })
	}	
}


export const SignOut=(history)=>(dispatch)=>{
	sessionStorage.clear();
	history.push(`/signin`);
	dispatch({type: ImageLinkFormActionTypes.CLEAR_LINK_FORM})
	dispatch({type: FormActionTypes.SIGN_OUT})
};


export const ClearForm =()=>(dispatch)=>{
	dispatch({type: FormActionTypes.CLEAR_FORM})
}