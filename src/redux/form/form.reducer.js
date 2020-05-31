
import {FormActionTypes} from './form.types';
import {ImageLinkFormActionTypes} from './../image_link_form/image_link_form.types';

const INITIAL_STATE = {
	name:'',
	email:'',
	password:'',
	user:{},
	isPending:false,
	validation:''
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
			return {...state,isPending:false,user:action.payload,validation:''}
		case FormActionTypes.SUBMIT_FAILED:
			return {...state, error:action.payload};
		case FormActionTypes.SIGN_OUT:
			return {...state,user:{},name:'',email:'',password:''}
		case FormActionTypes.VALIDATION_FAILED_BLANK:
			return {...state,validation:'Please fill in the required fields.'}
		case FormActionTypes.VALIDATION_FAILED_COMBINATION:
			return {...state,validation:'The combination of email and password you have entered is incorrect.'}
		case FormActionTypes.VALIDATION_FAILED_COMBINATION:
			return {...state,validation:'An account with this email already exists'}
		case ImageLinkFormActionTypes.INCREMENT_SUBMIT_PENDING:
			return {...state,isPending:true};
		case ImageLinkFormActionTypes.INCREMENT_SUBMIT_SUCCESS:
			return {...state,isPending:false,user:action.payload}
		case ImageLinkFormActionTypes.INCREMENT_SUBMIT_FAILED:
			return {...state, error:action.payload};
		default:
			return state;

	};
}



export default FormReducer;