/**
 * Created by Sumit-Yadav on 06-10-2017.
 */
import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Button,
    Container,
    Dropdown,
    Image,
    Menu,
    Responsive,
    Segment
} from 'semantic-ui-react';
import {logout} from "../../store/services/auth";

import {fetchCategory} from "../../store/services/category";
import {categoryActions} from '../../store/actions'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        event.preventDefault();
        this.props.dispatch(logout())
    }

    componentDidMount() {
        if(!this.props.isCategory){
            this.props.dispatch(fetchCategory())
                .catch((error) => {
                    this.props.dispatch(categoryActions.categoryError(error));
                })
        }
    }

    render() {
        this.avatar = (
            <span>
                 <Image avatar src={require('../../../images/avatar/boy.png')}
                        verticalAlign='top'/> {this.props.userName}
            </span>
        );
        return (
            <div>
                <Responsive as={Segment} inverted maxWidth={768} className="mobile-navbar">
                    <Menu size="large" inverted secondary>
                        <Menu.Item as={Link} to="/" className="logo" replace>
                            <img
                                src={require('../../../images/theme/infotiq-logo.png')} alt="infoTiq"/>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Dropdown icon="bars" className="collapsible-menu">
                                    <Dropdown.Menu className='bounceIn animated'>
                                        <Dropdown.Item as={NavLink} to="/home" text="Home"/>
                                        <Dropdown.Item as={NavLink} to="/courses" text="Courses"/>
                                        <Dropdown.Item text="Third"/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Responsive>
                <Responsive as={Segment} inverted style={{marginBottom: '0', borderRadius: '0', padding: '1em 0em'}}
                            className="navbar" minWidth={769}>
                    <Menu inverted pointing secondary size='large'>
                        <Container>
                            <Menu.Item as={Link} to="/" className="logo" replace><img
                                src={require('../../../images/theme/infotiq-logo.png')} alt="infoTiq"/></Menu.Item>
                            <Menu.Item as={NavLink} to="/home">Home</Menu.Item>
                            <Menu.Item as={NavLink} to="/courses">Courses</Menu.Item>
                            <Menu.Item as={NavLink} to="/dashboard">Dashboard</Menu.Item>
                            <Menu.Item as={NavLink} to="/admin/dashboard">Admin Dashboard</Menu.Item>

                            <Menu.Menu position='right'>
                                {this.props.isAuthenticated
                                    ? <Dropdown trigger={this.avatar} pointing='top right' className='user-dropdown'>
                                        <Dropdown.Menu className='bounceIn animated'>
                                            <Dropdown.Item
                                                text={"Signed in as " + this.props.userName}
                                                disabled key='user'/>
                                            <Dropdown.Item text="Profile" icon='user outline' key='profile'/>
                                            <Dropdown.Item text="Settings" icon='settings' key='setting'/>
                                            <Dropdown.Item onClick={this.handleLogout} text="logout" icon='sign out'
                                                           key='logout'/>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    : <Button.Group>
                                        <Button as={Link} to="/login" replace positive compact
                                                style={{lineHeight: '2em'}}>Login</Button>
                                        <Button.Or/>
                                        <Button as={Link} to="/register" replace color='blue' compact
                                                style={{lineHeight: '2em'}}>Register</Button>
                                    </Button.Group>
                                }
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </Responsive>
            </div>
        );
    }
}

Page.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isCategory: PropTypes.bool.isRequired,
};

export default Page;