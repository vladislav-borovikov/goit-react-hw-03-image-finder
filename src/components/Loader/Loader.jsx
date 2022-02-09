import React from 'react';
import { Rings } from  'react-loader-spinner'

const Loader = () => {

    return (<Rings
        heigth="100"
        width="100"
        color='grey'
        ariaLabel='loading'
      />


    )
}

export default Loader;