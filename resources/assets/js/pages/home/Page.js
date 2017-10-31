/**
 * Created by Sumit-Yadav on 05-10-2017.
 */
import  React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Responsive,
    Segment,
    Step
} from 'semantic-ui-react'

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Segment
                    inverted
                    textAlign='center'
                    className='home-header'
                    vertical
                >
                    <Container text>
                        <Responsive minWidth={769}>
                            <Header
                                as="h2"
                                content="ONLINE VIDEO TRAININGS"
                                inverted
                                className="pretitle"
                            />
                        </Responsive>
                        <Header
                            as='h1'
                            content='BOOST YOUR SKILLS'
                            inverted
                            className="main-heading"
                        />
                        <Header
                            as='p'
                            content='Learn something new every day and get inspired by the diversity of online learning'
                            inverted
                            className="sub-heading"
                        />
                        <Button color="teal" size='huge' className="free-signup-button">
                            <Icon name='play'/>
                            SIGN UP AND GET A 7-DAYS FREE TRIAL
                        </Button>
                    </Container>
                </Segment>
                <div className="course-tour">
                    <Container textAlign="center" style={{padding:'2em 0em'}}>
                        <Header as="h3" content="Get to your success in 3 simple steps"/>
                        <p>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                    </Container>
                    <Container className="step-container">
                        <Step>
                            <Step.Group stackable='tablet' fluid>
                                <Step>
                                    <Icon name="compass" color="teal"/>
                                    <Step.Content>
                                        <Step.Title>Take a free course tour</Step.Title>
                                    </Step.Content>
                                </Step>
                                <Step>
                                    <Icon name="payment" color="teal"/>
                                    <Step.Content>
                                        <Step.Title>Signup with your plan</Step.Title>
                                    </Step.Content>
                                </Step>
                                <Step>
                                    <Icon name="video play outline" color="teal"/>
                                    <Step.Content>
                                        <Step.Title>Enjoy watching tutorials</Step.Title>
                                    </Step.Content>
                                </Step>
                            </Step.Group>
                        </Step>
                        <Responsive minWidth={992}>
                            <Grid columns={3} padded="horizontally">
                                <Grid.Row>
                                    <Grid.Column>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta dolores
                                            dolorum eligendi, esse, facilis fugit hic impedit ipsam libero nisi
                                            obcaecati pariatur placeat soluta voluptatum. Aliquid officia quod
                                            veritatis!</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta dolores
                                            dolorum eligendi, esse, facilis fugit hic impedit ipsam libero nisi
                                            obcaecati pariatur placeat soluta voluptatum. Aliquid officia quod
                                            veritatis!</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta dolores
                                            dolorum eligendi, esse, facilis fugit hic impedit ipsam libero nisi
                                            obcaecati pariatur placeat soluta voluptatum. Aliquid officia quod
                                            veritatis!</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Responsive>
                    </Container>
                </div>
            </div>
        );
    }
}
export default Page;