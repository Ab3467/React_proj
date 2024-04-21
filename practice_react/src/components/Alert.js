import React from 'react';

export default function Alert(props) {
  return (
    <>
      {props.alert && ( // Check if props.alert is not null or undefined
        <div className={`alert alert-${props.alert?.msg} alert-dismissible fade show`} role="alert">
          <strong>{props.alert?.type}</strong>: {props.alert?.msg}
          
        </div>
      )}
    </>
  );
}

