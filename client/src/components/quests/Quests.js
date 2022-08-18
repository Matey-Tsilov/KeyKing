import { useEffect, useState } from 'react';
import * as api from '../../api/api.js';
import { QuestCard } from './Card';

export const Quests = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        api.get('/data/catalog')
           .then(res => setUsers(res))

    }, [users])

        return (
            <div className='center cards-container'>
                 {users.map((text) => <QuestCard key={text._id} text={text}/>)}
            </div>
      );
}