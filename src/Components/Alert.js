import React from 'react'


export default function (props) {
  
    
    const capitalize=(word)=>{
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert&& <div className={` container alertTran alert alert-${props.alert.type} alert-dismissible fade show ${!props.visible ? 'fadeout' : ''}`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}    
  </div>
  )
}
