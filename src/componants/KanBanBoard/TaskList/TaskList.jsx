import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card/Card';
import { v4 as uuid } from 'uuid';

const TaskList = () => {
  const [cards, setCards] = useState([]);
  const [newCardText, setNewCardText] = useState('');

  const addCard = () => {
    const newCard = { id: uuid(), text: newCardText, index: cards.length };
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    setNewCardText('');
  };

  const cardDelete = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  const handleNewCardTextChange = (event) => {
    setNewCardText(event.target.value);
  };

  return (
    <Droppable droppableId="task-list">
     {(provided) => (
        <div className="task-list"
          {...provided.droppableProps}
          ref = {provided.innerRef}
          >
          <div className="task-list-header">
            <h4 contentEditable>New List</h4>
          </div>
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              text={card.text}
              onDeleteCard={() => cardDelete(card.id)}
              index={card.index}
            />
          ))}
          {provided.placeholder}
          <div className="add-card">
            <input type="text" placeholder="Add a card..." value={newCardText} onChange={handleNewCardTextChange} />
            <button onClick={addCard} className="AddCard"><i className='fa fa-plus buttonColored'></i></button>
          </div>
        </div>
        )}
    </Droppable>
  );
};

export default TaskList;


