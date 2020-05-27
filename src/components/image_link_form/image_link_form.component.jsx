import React from 'react';
import './image_link_form.styles.css';
import {OnChangeImageLink,SubmitLinkForm} from '../../redux/image_link_form/image_link_form.actions';
import {connect} from 'react-redux';


const ImageLinkForm = ({onImageLinkFormChange,onSubmitLinkForm,imgUrl,user}) => {

  console.log('imageUrl0',imgUrl)


  return (
    <div>
      <p className='f3 white'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>

      <div className=' center'>
        <div className='form center pa4 br3 shadow-5'>
          <input type='text' className='pa2 f4 w-70 center' onChange={(e)=>onImageLinkFormChange(e.target.value)} />
          <button
          onClick={()=>onSubmitLinkForm(imgUrl,user)}
          className='w-30 grow f4 link ph3 pv2 black bg-light-purple'>Detect</button>
        </div>
      </div>
    </div>
  );
}




const mapDispatchToProps=dispatch=>{

  return{

    onImageLinkFormChange : (text)=>dispatch(OnChangeImageLink(text)),
    onSubmitLinkForm : (imgUrl,user)=>dispatch(SubmitLinkForm(imgUrl,user))

  }

}



const mapStateToProps = state =>{
  return{

    imgUrl : state.image_link_form.imgUrl,
    user : state.form.user

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ImageLinkForm);
