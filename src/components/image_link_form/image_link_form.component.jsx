import React from 'react';
import './image_link_form.styles.css';
import {OnChangeImageLink,SubmitLinkForm,UploadLinkForm} from '../../redux/image_link_form/image_link_form.actions';
import {connect} from 'react-redux';


const ImageLinkForm = ({onUploadLinkForm,onImageLinkFormChange,onSubmitLinkForm,imgUrl,user}) => {

  console.log('imageUrl0',imgUrl)

  return (
    <div className='center db'>
      <p className='f3 white'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='center db w-100'>
        <div className='form center pa3 br3 shadow-5'>
          <input value={imgUrl}  placeholder='http://example.com/face.jpg' type='url' className='pa2 f4 w-100 center' onChange={(e)=>onImageLinkFormChange(e.target.value)} />
        </div>
        <div className='file white form center ma2 pa3 br3 shadow-5'>
          <input className='inputfile'  onChange={(e)=>onUploadLinkForm(e.target.files[0])} id='uploadfile' name='uploadfile' type='file'  />
          <label htmlFor="uploadfile">Choose a file</label>
        </div>
        <button
          type='submit'
          onClick={()=>onSubmitLinkForm(imgUrl,user)}
          className='w-30 grow f4 link ph3 pv2 black bg-light-purple'>Detect</button>
      </div>
    </div>
  );
}




const mapDispatchToProps=dispatch=>{

  return{

    onImageLinkFormChange : (text)=>dispatch(OnChangeImageLink(text)),
    onSubmitLinkForm : (imgUrl,user)=>dispatch(SubmitLinkForm(imgUrl,user)),
    onUploadLinkForm:(file,user)=>dispatch(UploadLinkForm(file,user))
  }

}



const mapStateToProps = state =>{
  return{

    imgUrl : state.image_link_form.imgUrl,
    user : state.form.user

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ImageLinkForm);
