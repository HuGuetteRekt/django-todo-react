import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
      }
      handleChange = e => {
        let { name, value } = e.target;
        
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
      };
      render() {
        const { toggle, onSave } = this.props;
        return (
          <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}> Livre </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="auteur">Auteur</Label>
                  <Input
                    type="text"
                    name="auteur"
                    value={this.state.activeItem.auteur}
                    onChange={this.handleChange}
                    placeholder="Entrer le nom de l'auteur"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="titre">Titre</Label>
                  <Input
                    type="text"
                    name="titre"
                    value={this.state.activeItem.titre}
                    onChange={this.handleChange}
                    placeholder="Entrer le titre du livre"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="date">Date (YY-MM-DD)</Label>
                    <Input
                      type="datetime-local"
                      name="date"
                      checked={this.state.activeItem.date}
                      onChange={this.handleChange}
                      placeholder="Entrer le date d'édition"
                    />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                Sauvegarder
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
    }