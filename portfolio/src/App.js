import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Header, Grid, Container} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Container>
     <Header color= 'blue'>My React Portfolio</Header>
     <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
       
      </Grid.Column>
      <Grid.Column>
       
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
       
      </Grid.Column>
      <Grid.Column>
       
      </Grid.Column>
      <Grid.Column>
        
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
    </div>
  );
}

export default App;
