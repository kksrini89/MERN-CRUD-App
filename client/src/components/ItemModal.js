import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addItem } from '../store/actions/ItemActions';

class ItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: ''
      // hasError: false
    };
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange(event) {
    const name = event.target.value;
    if (name !== '') {
      this.setState({
        [event.target.name]: event.target.value
        // hasError: false
      });
    }
    // else {
    //   this.setState({ hasError: true });
    // }
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.name !== '') {
      this.props.addItem({ id: uuid(), name: this.state.name });
      this.toggle(); // Close the modal
    }
  }

  render() {
    return (
      <div>
        <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
