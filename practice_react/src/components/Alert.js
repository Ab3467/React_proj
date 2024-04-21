import React from 'react';

export default function Alert(props) {
  return (
    <>
      {props.alert && ( // Check if props.alert is not null or undefined
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>{props.alert?.type}</strong>: {props.alert?.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </>
  );
}

