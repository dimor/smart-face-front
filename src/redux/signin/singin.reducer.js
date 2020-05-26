
import {SignInActionTypes} from './singin.types';


const INITIAL_STATE = {
	signInEmail:'',
	signInPassword:'',
	response:'',
	isPending:false
};



const SignInReducer = (state = INITIAL_STATE , action) =>{

	console.log(action)

	switch(action.type){

		case SignInActionTypes.SIGN_OUT:
			return {...state ,response:'',signInEmail:'',signInPassword:''};
		case SignInActionTypes.ON_CHANGE_EMAIL_FIELD:
			return {...state ,signInEmail:action.payload};
		case SignInActionTypes.ON_CHANGE_PASSWORD_FIELD:
			return {...state ,signInPassword:action.payload};
		case SignInActionTypes.SIGNIN_SUBMIT_PENDING:
			return {...state,isPending:true};
		case SignInActionTypes.SIGNIN_SUBMIT_SUCCESS:
			return {...state,isPending:false,response:action.payload}
		case SignInActionTypes.SIGNIN_SUBMIT_FAILED:
			return {...state, error:action.payload}
		default:
			return state;

	};
}

export default SignInReducer;