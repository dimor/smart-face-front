
import {ImageLinkFormActionTypes} from './image_link_form.types';


const INITIAL_STATE = {
	imgUrl :'',
	boxes:[],
	isPending:false,
};



const FormReducer = (state = INITIAL_STATE , action) =>{


	switch(action.type){
		case ImageLinkFormActionTypes.ON_CHANGE_IMAGE_LINK:
			return {...state ,imgUrl:action.payload};
		case ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_PENDING:
			return {...state,isPending:true};
		case ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_SUCCESS:
			return {...state,isPending:false,boxes:action.payload}
		case ImageLinkFormActionTypes.IMAGE_LINK_FORM_SUBMIT_FAILED:
			return {...state, error:action.payload};
		default:
			return state;

	};
}

export default FormReducer;