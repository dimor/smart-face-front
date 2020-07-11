import React, { Children } from 'react';
import LoaderGif from './loader.gif';

const Loader =(props)=>{

    const {isPending} = props;

    if(isPending){

       return  <img className=' z-2' src={LoaderGif} alt='loader' width='200px' height='200px' />

    }else{
        return props.children;
    }
}


export default Loader;