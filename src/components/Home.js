import {Header, Container, Button, Icon, Image, Menu, Segment, List,Grid, MenuItem, Input} from 'semantic-ui-react'
import React from 'react'




//export default function HomePage(){
  const HomePage = () => {
    return (
    <div className="App">
      <Container fluid>
      <Menu fluid color = "blue" inverted widths pointing secondary>
       
         
          <Menu.Item>
            <a href="#projects" > Projects</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#education" > Education</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#contact" > Contact</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#resume" > Resume</a>
          </Menu.Item>
          <Menu.Menu position="right">
            <MenuItem>
            <Header>My Portfolio</Header>
            </MenuItem>
          </Menu.Menu>
          <Menu.Menu position="right">
            <MenuItem>
            <Button  name='LinkedIn'>
                <a href="https://www.linkedin.com/in/deandraadiedrick/" > <Icon name='linkedin' /> LinkedIn</a> 
            </Button>
            </MenuItem>
          <Menu.Item>
            <a href="https://github.com/ddiedrick" >
                <Icon size='large'link name="github" />
            </a>
          </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Grid  >
    <Grid.Column width={4}>
      <Image src='../images/profilePic.jpg' size='small' centered/>
    </Grid.Column>
    <Grid.Column width={8} >
        <Segment>
     <Header color = "violet" >About Me</Header>
     <p textAlign='centered'>
        My name is Deandra Diedrick. I was born and raised in Kingston, Jamaica but moved to the US when I was 11. Since then,
        I have lived in Florida, Georgia, and California.
     </p>
     </Segment>
     <Segment id='education'> 
        <Header color = "violet">Education</Header>
        <p>
       I completed my Bachelors Degree in Computer Science after a long 5 years at Georgia State University. I graduated in May 2020.
     </p>
     </Segment>
     <Segment id='projects'> 
        <Header color = "violet">Projects</Header>
        <p>
            Some projects I've completed during the UC Berkeley Full-Stack Programming Bootcamp.
            <List horizontal>
                <List.Item >
                    <List.Content>
                        <a href='https://github.com/ddiedrick/ReadmeGen'>ReadmeGen</a>
                    </List.Content>
                </List.Item>
                <List.Item >
                    <List.Content>
                        <a href='https://perfectblue0.github.io/group-project-1/'>Sunny Search</a>
                    </List.Content>
                </List.Item>
                <List.Item >
                    <List.Content>
                        <a href='https://sheltered-sea-11068-ef6392f13d6a.herokuapp.com/chat'>CatchUp Chat</a>
                    </List.Content>
                </List.Item>
            </List>
        </p>
        <p>
            
            <List horizontal>
                <List.Item >
                    <List.Content>
                        <a href='https://ddiedrick.github.io/SEOgen/'>SEOgen</a>
                    </List.Content>
                </List.Item>
                <List.Item >
                    <List.Content>
                        <a href='https://ddiedrick.github.io/PasswordGen/'>Password Generator</a>
                    </List.Content>
                </List.Item>
                <List.Item >
                    <List.Content>
                        <a href='https://ddiedrick.github.io/planner101/'>Planner101</a>
                    </List.Content>
                </List.Item>
            </List>
        </p>

     </Segment>
     <Segment id='resume'> 
        <Header color = "violet">Resume</Header>
        <p>
            Link to my <a href="https://docs.google.com/document/d/1My-b1RT1oWEMwPc4hH9MdHsTqcZ5M1pFp0M30v4uVfQ/edit?usp=sharing">resume</a>.
        </p>
       
     </Segment>
     <Segment id='contact' > 
        <Header color = "violet">Contact Info</Header>
       <List >
            <List.Item>
                <List.Icon name='mail' />
                    <List.Content>
                     <a href='mailto:dadiedrick@gmail.com'>dadiedrick@gmail.com</a>
                    </List.Content>
              
            </List.Item>
                
            <List.Item>
                <List.Icon name='marker' />
                    <List.Content>San Jose, CA</List.Content>
            </List.Item>    
       </List>
       <p>
        Or leave your info below and I will get back to you ASAP.
        </p>
        <div>
        <Input placeholder="Name" />
        <Input icon="mail" placeholder="Email" />
        <Input icon="phone" placeholder="Phone" />
        </div>
     </Segment>
    </Grid.Column>
    <Grid.Column width={4}>
      <Image src='../images/IMG_4531.jpeg' size='small' centered/>
    </Grid.Column>
    
  </Grid>
  <Header color = "violet" centered>Photography</Header>
  <Grid>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='../images/_DSC0074.JPG' />
      </Grid.Column>
      <Grid.Column>
        <Image src='../images/_DSC0122.JPG' />
      </Grid.Column>
      <Grid.Column>
        <Image src='../images/_DSC0138.JPG' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='../images/IMG_3118.jpeg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='../images/IMG_3165.PNG' />
      </Grid.Column>
      <Grid.Column>
        <Image src='../images/_DSC0350.JPG' />
      </Grid.Column>
    </Grid.Row>

   
  </Grid>
  
  </Container>
  <footer>
    <p>
     
        <Button  name='Github'>
        <a href="https://github.com/ddiedrick"> <Icon name='github' /> Github</a> 
            </Button>
        <Button  name='LinkedIn'>
                <a href="https://www.linkedin.com/in/deandraadiedrick/" > <Icon name='linkedin' /> LinkedIn</a> 
            </Button>
    </p>
    
  </footer>  
    </div>
    );
}


export default HomePage;
