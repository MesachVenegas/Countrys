import React from 'react';

const Multiply = ({counter}) => {

    if(counter %5 === 0){
        return(
            <div>Es múltiplo de CINCO</div>
        )
    }else if(counter % 3 === 0){
        return(
            <div>Es múltiplo de TRES</div>
        )
    }
    else if(counter % 2 === 0){
        return(
            <div>Es múltiplo de DOS</div>
        )
    }else{
        return(
            <div>No es múltiplo ni de CINCO, TRES o DOS</div>
        )
    }
};

export default Multiply;