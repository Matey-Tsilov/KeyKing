import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from '../../Contexts/userContext.js';
import * as textService from '../../services/textService.js'
import TextContext from '../../Contexts/textContext.js';



const Details = () => {
    const {id} = useParams()
    
    const {user} = useContext(UserContext)
    const {passedText, setPassedText} = useContext(TextContext)
    
    const [text, setText] = useState({})
    
    useEffect(() => {
        textService.getById(id)
           .then(result => {
            setText(result)
            setPassedText(result)
        })
    }, [id, setText, setPassedText])

    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(() => true)
    
    const hideModal = () => {
       setIsOpen(false)
       navigate('/quests')
    }

    const openEditView = () => {
        setIsOpen(false)
        navigate(`/edit/${text._id}`)
    }

    const deleteText = async () => {
        await textService.deleteText(id)
        navigate('/quests')
    }

    const openChallange = () => {
       setIsOpen(false)
        navigate(`/challange/${id}`)
    }
    return (
      <Modal show={isOpen} onHide={hideModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Language: {text.language}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{text.title}</h4>
        <p>
          {text.content}
        </p>
      </Modal.Body>
      <Modal.Footer>
       {JSON.stringify(user) != '{}' && <Button className='footer-nav' variant='info' onClick={openChallange}>Take</Button>}
        <h5 className='footer-nav'>Prize: {text.loot} <i className="bi bi-coin"></i></h5>
        <h5 className='footer-nav'>Time: {text.time}sec <i className="bi bi-clock"></i></h5>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>
        <p className="space">&nbsp;&nbsp;&nbsp;</p>


        <Button onClick={hideModal}>Close</Button>

        { text._ownerId == user._id &&
            <>
            <Button className='footer-nav' variant='success' onClick={openEditView}>Edit</Button>
            <Button className='footer-nav' variant='danger' onClick={deleteText}>Delete</Button>
            </>
        }

      </Modal.Footer>
    </Modal>
    )
}

export default Details
