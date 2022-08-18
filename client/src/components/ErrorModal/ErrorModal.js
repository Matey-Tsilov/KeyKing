import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

export const ErrorModal = ({error}) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
       setIsOpen(error != {})
    }, [error])

    const hideModal = () => {   
      setIsOpen(false);
    };
  
    return (
      <>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Oops!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{error.message}</Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  
  };



