import React from 'react';
import ReactDOM from 'react-dom';

import classes from './ListRented.module.css';

export default function ListRented(props) {
  console.log(props.list);
  return (
    <Modal>
      <div>
        <button onClick={props.removeOverlay} className={classes.button42}>
          Close the list
        </button>
        <ol className={classes.rentedList}>
          {props.list.map((item) => {
            return (
              <li key={item.email}>
                {/* <hr /> */}
                <h5>Email: {item.email}</h5>
                <h5>Name: {item.name}</h5>
                <h5>Cycle: {item.cycleid}</h5>
                <h5>Roll No.: {item.rollno}</h5>
                {/* <hr /> */}
              </li>
            );
          })}
        </ol>
        <button onClick={props.removeOverlay} className={classes.button42}>
          Close the list
        </button>
      </div>
    </Modal>
  );
}

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalAddress = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalAddress
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalAddress
      )}
    </React.Fragment>
  );
};

// export default Modal;
