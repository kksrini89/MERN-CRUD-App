import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: uuid(), name: 'milk' },
        { id: uuid(), name: 'box' },
        { id: uuid(), name: 'shoe' },
        { id: uuid(), name: 'toy' }
      ]
    };
    this.addItem = this.addItem.bind(this);
  }

  /**
   * To add new item to internal state's items property
   */
  addItem() {
    try {
      const name = prompt('Enter name here');
      this.setState({
        items: [...this.state.items, { id: uuid(), name }]
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * To remove an item from Items array
   * @param {Number} index Item Index to be removed
   */
  removeItem(index) {
    try {
      if (index) {
        // One way to remove an item from an array - slice method
        this.setState({
          items: [...this.state.items.slice(0, index), ...this.state.items.slice(index + 1)]
        });
        // An alternative way to remove an item from an array - filter method
        // items: this.state.items.filter(item=> item.id!==id);
      }
    } catch (error) {
      throw error;
    }
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.addItem}>
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }, index) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    color="danger"
                    size="sm"
                    className="remove-btn"
                    onClick={() => this.removeItem(index)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
