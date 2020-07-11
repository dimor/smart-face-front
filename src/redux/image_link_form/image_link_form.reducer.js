
import {ImageLinkFormActionTypes} from './image_link_form.types';


const INITIAL_STATE = {
	imgUrl :'https://i.ibb.co/m8pkMD8/people.jpg',
	boxes:[],
	isPending:false,
	link_msg:'',
	errormsg:''
};



const FormReducer = (state = INITIAL_STATE , action) =>{


	switch(action.type){
		case ImageLinkFormActionTypes.ON_CHANGE_IMAGE_LINK:
			return {...state ,imgUrl:action.payload,boxes:[],errormsg:''};
		case ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_PENDING:
			return {...state,isPending:true};
		case ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_SUCCESS:
			return {...state,isPending:false,boxes:action.payload,errormsg:''}
		case ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_FAILED:
			return {...state, isPending:false,errormsg:action.payload.message,error:action.payload};
		case ImageLinkFormActionTypes.CLEAR_LINK_FORM:
			return {...state,boxes:[],imgUrl:INITIAL_STATE.imgUrl,errormsg:''}
		case ImageLinkFormActionTypes.IMAGE_LINK_FORM_UPLOAD_PENDING:
			return {...state,isPending:true,imgUrl:'',boxes:[],errormsg:''}
		case ImageLinkFormActionTypes.IMAGE_LINK_FORM_UPLOAD_SUCCESS:
			return {...state,isPending:false,imgUrl:action.payload,errormsg:''}
		case ImageLinkFormActionTypes.IMAGE_LINK_FORM_UPLOAD_FAILED:
			return {...state,isPending:false,error:action.payload,link_msg:action.payload.message}
		default:
			return state;

	};
}

export default FormReducer;