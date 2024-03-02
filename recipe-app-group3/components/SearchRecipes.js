import React, { Component } from 'react';
import {
  Menu,
  Input,
  Segment,
  Image,
  List,
  Card,
  Grid,
  Modal,
  ModalHeader,
  ModalContent,
  ModalDescription,
  ModalActions,
  Button,
} from 'semantic-ui-react';
import allRecipesData from '@/public/allrecipes.json';
import styles from '@/styles/Home.module.css';

class MenuExampleTabularOnTop extends Component {
  state = {
    activeItem: 'all',
    searchInput: '',
    recipes: allRecipesData,
    hoveredCardIndex: null,
    isRecipeModalOpen: false,
    selectedRecipe: null,
  };

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name }, () => this.filterRecipes());

  handleSearchChange = (e) => {
    const { value } = e.target;
    this.setState({ searchInput: value }, () => {
      this.filterRecipes();
    });
  };

  handleCardHover = (isHovered, index) => {
    this.setState({ hoveredCardIndex: isHovered ? index : null });
  };

  openRecipeModal = (recipe) => {
    this.setState({ selectedRecipe: recipe, isRecipeModalOpen: true });
  };

  closeRecipeModal = () => {
    this.setState({ selectedRecipe: null, isRecipeModalOpen: false });
  };

  filterRecipes = () => {
    const { searchInput, activeItem } = this.state;
    const filteredRecipes = allRecipesData.filter(
      (recipe) =>
        (activeItem === 'all' || recipe.category.toLowerCase() === activeItem) &&
        recipe.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ recipes: filteredRecipes, hoveredCardIndex: null });
  };

  render() {
    const {
      activeItem,
      searchInput,
      recipes,
      hoveredCardIndex,
      isRecipeModalOpen,
      selectedRecipe,
    } = this.state;

    const uniqueCategories = Array.from(
      new Set(allRecipesData.map((recipe) => recipe.category.toLowerCase()))
    );

    return (
      <div>
        <Grid columns={1} stackable>
          <Grid.Column>
            <Menu fluid vertical>
              <Menu.Item
                name='all'
                active={activeItem === 'all'}
                onClick={this.handleItemClick}
              >
                All
              </Menu.Item>
              {uniqueCategories.map((category) => (
                <Menu.Item
                  key={category}
                  name={category}
                  active={activeItem === category}
                  onClick={this.handleItemClick}
                >
                  {category}
                </Menu.Item>
              ))}
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu fluid vertical>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input
                    transparent
                    icon={{ name: 'search', link: true }}
                    placeholder='Search recipes...'
                    value={searchInput}
                    onChange={this.handleSearchChange}
                  />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid>

        <Segment attached='bottom'>
          <Grid columns={5} doubling stackable centered>
            {recipes.map((recipe, index) => (
              <Grid.Column key={recipe.title}>
                <Card
                  style={{
                    height: '100%',
                    marginBottom: '20px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    transform: hoveredCardIndex === index ? 'scale(1.05)' : 'scale(1)',
                    boxShadow:
                      hoveredCardIndex === index
                        ? '0 0 20px rgba(0, 0, 0, 0.2)'
                        : '0 0 10px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={() => this.openRecipeModal(recipe)}
                  onMouseEnter={() => this.handleCardHover(true, index)}
                  onMouseLeave={() => this.handleCardHover(false, index)}
                >
                  <Image src={recipe.image} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header style={{ fontSize: '1.5em', color: 'black' }}>
                      {recipe.title}
                    </Card.Header>
                    <Card.Description
                      style={{
                        color: 'darkgray',
                        height: '80px',
                        overflow: 'hidden',
                      }}
                    >
                      {recipe.description}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <List bulleted>
                      <List.Item style={{ color: 'darkgray' }}>
                        <strong>Prep Time:</strong> {recipe.prep_time}
                      </List.Item>
                      <List.Item style={{ color: 'darkgray' }}>
                        <strong>Cook Time:</strong> {recipe.cook_time}
                      </List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        </Segment>

        <Modal open={isRecipeModalOpen} onClose={this.closeRecipeModal} >
          <ModalHeader>{selectedRecipe?.title}</ModalHeader>
          <ModalContent>
            <Image size='small' src={selectedRecipe?.image} wrapped />
            <ModalDescription>
              <p>{selectedRecipe?.description}</p>
              <strong>Ingredients:</strong>
              <ul>
                {selectedRecipe?.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <strong>Instructions:</strong>
              <ol>
                {selectedRecipe?.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
              <p>
                <strong>Prep Time:</strong> {selectedRecipe?.prep_time}
              </p>
              <p>
                <strong>Cook Time:</strong> {selectedRecipe?.cook_time}
              </p>
              <p>
                <strong>Total Time:</strong> {selectedRecipe?.total_time}
              </p>
              <p>
                <strong>Serving Size:</strong> {selectedRecipe?.serving_size}
              </p>
              <p>
                <strong>Calories per Serving:</strong>{' '}
                {selectedRecipe?.calories_per_serving}
              </p>
              <p>
                <strong>Difficulty Level:</strong>{' '}
                {selectedRecipe?.difficulty_level}
              </p>
            </ModalDescription>
          </ModalContent>
          <ModalActions>
            <Button onClick={this.closeRecipeModal}>Close</Button>
          </ModalActions>
        </Modal>
      </div>
    );
  }
}

export default MenuExampleTabularOnTop;
