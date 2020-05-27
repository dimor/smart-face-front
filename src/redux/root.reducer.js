import {combineReducers} from 'redux';

import FormReducer from './form/form.reducer';
import ImageLinkFormReducer from './image_link_form/image_link_form.reducer'


export default combineReducers({

	form : FormReducer,
	image_link_form : ImageLinkFormReducer

});