import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';


export const WinModal = ({error, id}) => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
       setIsOpen(error != {})
    }, [error])

    const hideModal = () => {   
      setIsOpen(false);
      navigate(`/details/${id}`)
    };
  
    return (
      <>
        <Modal show={isOpen} onHide={hideModal} size='md'>
          <Modal.Header>
          </Modal.Header>
          <Modal.Body style={{textAlign: "center"}}>{error.message}</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={hideModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  
  };