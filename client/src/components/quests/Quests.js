import * as api from '../../api/api';
import { QuestCard } from './Card';

export const Quests = async () => {
    const allTexts = await api.get('/data/catalog') 

    return (
        <div className='center'>
             {allTexts.map(text => <QuestCard key={text._id} {...text}/>)}
        </div>
  );
}