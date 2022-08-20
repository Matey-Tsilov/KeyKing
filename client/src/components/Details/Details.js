import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../../Contexts/Context.js';
import * as textService from '../../services/textService.js'



const Details = () => {
    const [text, setText] = useState({})
    const {user} = useContext(UserContext)

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        textService.getById(id)
           .then(result => setText(result))
    }, [id])

    const [isOpen, setIsOpen] = useState(() => true)
    
 
    const hideModal = () => {
       setIsOpen(false)
       navigate('/quests')
    }

    const openEditView = () => {
        setIsOpen(false)
        navigate(`/edit/${id}`)
    }

    return (
      <Modal show={isOpen} onHide={hideModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Language: {text.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{text.language}</h4>
        <p>
          {text.content}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='footer-nav' variant='info' onClick={hideModal}>Take</Button>
        <h5 className='footer-nav'>Prize: {text.loot} <i class="bi bi-coin"></i></h5>
        <h5 className='footer-nav'>Time: {text.time}sec <i class="bi bi-clock"></i></h5>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>

        <Button onClick={hideModal}>Close</Button>

        { text._ownerId == user._id &&
            <>
            <Button className='footer-nav' variant='success' onClick={openEditView}>Edit</Button>
            <Button className='footer-nav' variant='danger' onClick={openEditView}>Delete</Button>
            </>
        }

      </Modal.Footer>
    </Modal>
    )
}

export default Details
