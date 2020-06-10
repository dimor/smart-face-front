import React from 'react';
import './image_link_form.styles.css';
import {OnChangeImageLink,SubmitLinkForm,UploadLinkForm} from '../../redux/image_link_form/image_link_form.actions';
import {connect} from 'react-redux';


const ImageLinkForm = ({onUploadLinkForm,onImageLinkFormChange,onSubmitLinkForm,imgUrl,user,link_msg}) => {

  console.log('imageUrl0',imgUrl)

  return (
    <div className=' center db border-box w-100'>

      <p className='f3 white db'>
        {'This Smart Face will detect faces in your pictures. Give it a try.'}
      </p>
      <p className='f3 white db'>
        {'Paste image url or choose from device and presss detect.'}
      </p>

      <div className='center db br2'>

        <div className='form center pa3 br3 shadow-5'>
          <input value={imgUrl}  placeholder='http://example.com/face.jpg' type='url' className='w-100 pa2 f4 center' onChange={(e)=>onImageLinkFormChange(e.target.value)} />
        </div>

        <div className='form file white  center ma2 pa3 br3 shadow-5'>
          <input className='inputfile'  onChange={(e)=>onUploadLinkForm(e.target.files[0])} id='uploadfile' name='uploadfile' type='file'  />
          <label htmlFor="uploadfile">Choose a file</label>
        </div>

        <button
          type='submit'
          onClick={()=>onSubmitLinkForm(imgUrl,user)}
          className=' grow f4 link ph3 pv2 black bg-light-purple'>Detect
        </button>
        <p>{link_msg}</p>
      </div>
    </div>
  );
}




const mapDispatchToProps=dispatch=>{

  return{

    onImageLinkFormChange : (text)=>dispatch(OnChangeImageLink(text)),
    onSubmitLinkForm : (imgUrl,user)=>dispatch(SubmitLinkForm(imgUrl,user)),
    onUploadLinkForm:(file)=>dispatch(UploadLinkForm(file))
  }

}



const mapStateToProps = state =>{
  return{

    imgUrl : state.image_link_form.imgUrl,
    user : state.form.user,
    link_msg : state.image_link_form.link_msg

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ImageLinkForm);
