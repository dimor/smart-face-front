import {RegisterActionTypes} from './register.types';
import {SignInActionTypes} from '../signin/singin.types';
import {RegisterSubmitCall} from './register.utils';



export const RegisterOnChangeEmail=(text)=>({

	type: RegisterActionTypes.ON_CHANGE_EMAIL_FIELD,
	payload: text


});



export const RegisterOnChangePassword=(text)=>({

	type: RegisterActionTypes.ON_CHANGE_PASSWORD_FIELD,
	payload: text


});


export const RegisterOnChangeName=(text)=>({

	type: RegisterActionTypes.ON_CHANGE_NAME_FIELD,
	payload: text


});


export const RegisterSubmit=(credentials,history)=>(dispatch)=>{
	dispatch({type:RegisterActionTypes.REGISTER_SUBMIT_PENDING});
	RegisterSubmitCall(credentials,history)
	.then(data => dispatch({ type: RegisterActionTypes.REGISTER_SUBMIT_SUCCESS, payload: data }))
	.catch(error => dispatch({ type: RegisterActionTypes.REGISTER_SUBMIT_FAILED, payload: error }))
}
