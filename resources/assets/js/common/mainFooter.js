/**
 * Created by Sumit-Yadav on 12-10-2017.
 */
import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    List,
    Responsive
} from 'semantic-ui-react'

import {Link} from 'react-router-dom'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <Container>
                    <Grid columns={3} stackable>
                        <Grid.Row>
                            <Grid.Column className="address-column">
                                <Header as={Link} to="/" className="logo" replace><img
                                    src={require('../../images/theme/infotiq-logo.png')} alt="infoTiq"/></Header>
                                <Header as="h6" inverted>
                                    <Icon name="marker" color='green'/>
                                    <Header.Content>
                                        Address: 127 Sith Avenue, 54571 New York City
                                    </Header.Content>
                                </Header>
                                <Header as="h6" inverted>
                                    <Icon name="phone" color='green'/>
                                    <Header.Content>
                                        <b>Phone:</b> +49 123 456 789
                                    </Header.Content>
                                </Header>
                                <Header as="h6" inverted>
                                    <Icon name="mail outline" color='green'/>
                                    <Header.Content>
                                        <b>E-mail:</b> me@infotiq.com
                                    </Header.Content>
                                </Header>
                                <div className="social-box">
                                    <Button circular size='tiny' icon='facebook' inverted/>
                                    <Button circular size='tiny' icon='twitter' inverted/>
                                    <Button circular size='tiny' icon='linkedin' inverted/>
                                    <Button circular size='tiny' icon='google plus' inverted/>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <Grid columns="equal">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <List inverted>
                                                <List.Header>GET HELP</List.Header>
                                                <List.Item as="a">Apples</List.Item>
                                                <List.Item as="a">Pears</List.Item>
                                                <List.Item as="a">Oranges</List.Item>
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <List inverted>
                                                <List.Header>INFORMATION</List.Header>
                                                <List.Item as="a">Apples</List.Item>
                                                <List.Item as="a">Pears</List.Item>
                                                <List.Item as="a">Oranges</List.Item>
                                            </List>
                                        </Grid.Column>
                                    </Grid.Row>

                                </Grid>
                            </Grid.Column>
                            <Grid.Column>
                                <Grid columns="equal">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <List inverted>
                                                <List.Header>ACCOUNT</List.Header>
                                                <List.Item as="a">Apples</List.Item>
                                                <List.Item as="a">Pears</List.Item>
                                                <List.Item as="a">Oranges</List.Item>
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <List inverted>
                                                <List.Header>QUICKLINKS</List.Header>
                                                <List.Item as="a">Apples</List.Item>
                                                <List.Item as="a">Pears</List.Item>
                                                <List.Item as="a">Oranges</List.Item>
                                            </List>
                                        </Grid.Column>
                                    </Grid.Row>

                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid columns="equal" verticalAlign="middle" className="foobar" stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as="h5" inverted>Copyright 2017 © Infotiq | All Rights
                                    Reserved</Header>
                            </Grid.Column>
                            <Responsive minWidth={768}>
                                <Grid.Column textAlign="right">
                                    <Icon name="visa card" size="big" link inverted/>
                                    <Icon name="mastercard card" size="big" link inverted/>
                                    <Icon name="stripe card" size="big" link inverted/>
                                    <Icon name="paypal card" size="big" link inverted/>
                                </Grid.Column>
                            </Responsive>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Footer;