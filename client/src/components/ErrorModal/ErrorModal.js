import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

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
        <Modal show={isOpen} onHide={hideModal} size='md'>
          <Modal.Header>
            <Modal.Title>Oops!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{error.message}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={hideModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  
  };



