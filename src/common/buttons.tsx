/*мертвая страница*/
import React, {useState} from 'react';
import './button.styles.css'

type ButtonsPropsType = {
    value: string,
    changeFilter: (value: string) => void,
}

function Buttons(props: ButtonsPropsType) {
    return (<span>
    <input className={'universalButton'} type={'button'} value={props.value}
           onClick={() => props.changeFilter(props.value)}
    >
           </input>
</span>)
}

export default Buttons


// import React, {useState} from 'react';
// import './button.styles.css'
//
// type ButtonsPropsType = {
//     value: string,
//     changeFilter: (value: string) => void,
//     mId?: string
// }
//
// function Buttons(props: ButtonsPropsType) {
//     return (<span>
//     <input className={'universalButton'} type={'button'} value={props.value}
//            onClick={() => {
//                if (props.value == 'All' || 'HightPrioritet' || 'MiddlePrioritet' || 'LowPrioritet') {
//                    props.changeFilter(props.value)
//                } else {
//                    props.changeFilter(props.mId)
//                }
//            }
//            }
//
//     >
//            </input>
// </span>)
// }
//
// export default Buttons

//=============================================================
