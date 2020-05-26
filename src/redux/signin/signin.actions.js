import {SignInActionTypes} from './singin.types';
import {SignInSubmitCall} from './signin.utils';


export const SignOut=(history)=>(dispatch)=>{
	history.push('/signin');
	dispatch({type: SignInActionTypes.SIGN_OUT})
};


export const SignInOnChangeEmail=(text)=>({

	type: SignInActionTypes.ON_CHANGE_EMAIL_FIELD,
	payload: text


});



export const SignInOnChangePassword=(text)=>({

	type: SignInActionTypes.ON_CHANGE_PASSWORD_FIELD,
	payload: text


});


export const SignInSubmit=(credentials,history)=>(dispatch)=>{

	dispatch({type:SignInActionTypes.SIGNIN_SUBMIT_PENDING});
	SignInSubmitCall(credentials,history)
	.then(data => dispatch({ type: SignInActionTypes.SIGNIN_SUBMIT_SUCCESS, payload: data }))
	.catch(error => dispatch({ type: SignInActionTypes.SIGNIN_SUBMIT_FAILED, payload: error }))
}
