
import {RegisterActionTypes} from './register.types';


const INITIAL_STATE = {
	RegisterEmail:'',
	RegisterPassword:'',
	RegisterName:'',
	response:'',
	isPending:false
};



const RegisterReducer = (state = INITIAL_STATE , action) =>{


	switch(action.type){
		case RegisterActionTypes.ON_CHANGE_NAME_FIELD:
			return {...state ,RegisterName:action.payload};
		case RegisterActionTypes.ON_CHANGE_EMAIL_FIELD:
			return {...state ,RegisterEmail:action.payload};
		case RegisterActionTypes.ON_CHANGE_PASSWORD_FIELD:
			return {...state ,RegisterPassword:action.payload};
		case RegisterActionTypes.REGISTER_SUBMIT_PENDING:
			return {...state,isPending:true};
		case RegisterActionTypes.REGISTER_SUBMIT_SUCCESS:
			return {...state,isPending:false,response:action.payload}
		case RegisterActionTypes.REGISTER_SUBMIT_FAILED:
			return {...state, error:action.payload}
		default:
			return state;

	};
}

export default RegisterReducer;