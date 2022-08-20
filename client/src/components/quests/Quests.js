import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../Contexts/userContext.js';
import { QuestCard } from './Card';
import * as textService from '../../services/textService.js';


const Quests = () => {
    const {user} = useContext(UserContext)

    const [texts, setTexts] = useState([])

    useEffect(() => {
        textService.getAllTexts()
           .then(all => setTexts(all))

    }, [])

    const result = texts.length != 0 

    const isNotLogged = <p className='center no-quests'>No quests yet. <Link to={'/login'}>Log in</Link> and create one!</p>
    const isLogged = <p className='center no-quests'>No quests yet. Why don't you <Link to={'/create'}>create</Link> one?</p>
    
    return (result
    ? <div className='center cards-container'>
       {texts.map((text) => <QuestCard key={text._id} text={text}/>)}
      </div>
    : <div className='center no-quests'>{JSON.stringify(user) == '{}' ? isNotLogged : isLogged}</div>)


}

export default Quests