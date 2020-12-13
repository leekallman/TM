
import React from "react"
import closeStyles from './close.module.css';
import cancel from '../images/cancel.png'

const Close = ({close}) => {

    return (
        <button onClick={close} className={closeStyles.closeBtn}><img src={cancel}/></button>
    )
}

export default Close

