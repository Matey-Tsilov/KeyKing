import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const QuestCard = () => {
    return (
        <Card style={{ width: '18rem' }} className='center'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
  );
}