import { useEffect, useState } from 'react';
import * as api from '../../api/api.js';
import { QuestCard } from './Card';

export const Quests = () => {

    const [texts, setTexts] = useState([])

    useEffect(() => {
        api.get('/data/catalog')
           .then(res => setTexts(res))

    }, [texts])

    const result = texts.length == 0 
    
    return (result
    ? <div className='center cards-container'>
       {texts.map((text) => <QuestCard key={text._id} text={text}/>)}
      </div>
    : <div className='center no-quests'>{}</div>)


}