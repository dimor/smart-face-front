
import {FormActionTypes} from './form.types';


const INITIAL_STATE = {
	name:'',
	email:'',
	password:'',
	user:{},
	isPending:false
};



const FormReducer = (state = INITIAL_STATE , action) =>{


	switch(action.type){
		case FormActionTypes.ON_CHANGE_NAME_FIELD:
			return {...state ,name:action.payload};
		case FormActionTypes.ON_CHANGE_EMAIL_FIELD:
			return {...state ,email:action.payload};
		case FormActionTypes.ON_CHANGE_PASSWORD_FIELD:
			return {...state ,password:action.payload};
		case FormActionTypes.SUBMIT_PENDING:
			return {...state,isPending:true};
		case FormActionTypes.SUBMIT_SUCCESS:
			return {...state,isPending:false,user:action.payload}
		case FormActionTypes.SUBMIT_FAILED:
			return {...state, error:action.payload};
		case FormActionTypes.SIGN_OUT:
			return {state:INITIAL_STATE}
		default:
			return state;

	};
}

export default FormReducer;