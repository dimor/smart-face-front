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

	if(validateForm(credentials,history,dispatch)){
		dispatch({type:FormActionTypes.SUBMIT_PENDING});
		SubmitCall(credentials,history,dispatch)
		.then(data => dispatch({ type: FormActionTypes.SUBMIT_SUCCESS, payload: data }))
		.catch(error => {
			dispatch({ type: FormActionTypes.SUBMIT_FAILED, payload: error })
		})
	}else{
		const error =  Error('Please fill in the required fields.')
		dispatch({ type: FormActionTypes.SUBMIT_FAILED, payload: error })
		// .catch(error=>dispatch({ type: FormActionTypes.SUBMIT_FAILED, payload: error }))
	}	
}


export const SignOut=(history)=>(dispatch)=>{
	history.push(`/signin`);
	dispatch({type: ImageLinkFormActionTypes.CLEAR_LINK_FORM})
	dispatch({type: FormActionTypes.SIGN_OUT})
};


