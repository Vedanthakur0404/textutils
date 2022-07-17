import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.state} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.state}</strong>{props.alert.msg}
    </div>
  )
}

export default Alert
