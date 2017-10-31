// import libs
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
// import components
import Navigation from '../../common/navigation'
import MainFooter from '../../common/mainFooter'
import {
    Checkbox,
    Container,
    Icon,
    Menu,
    Sidebar,
    Segment,
} from 'semantic-ui-react'
import PageHeader from '../common/pageHeader'

class AdminMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleVisible: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState((prevState, props) => ({
            toggleVisible: !prevState.toggleVisible
        }));
    }

    render() {
        return (
            <div>
                <Navigation/>
                <main className="admin-main fadeIn animated">
                    <PageHeader heading="Dashboard"/>
                    <Container fluid>
                        <Segment compact className='toggle-button'>
                            <Checkbox onClick={this.toggleVisibility} toggle/>
                        </Segment>
                        <Sidebar.Pushable as={Segment}>
                            <Sidebar as={Menu} animation='scale down' width='thin' visible={this.state.toggleVisible}
                                     icon='labeled' vertical inverted>
                                <Menu.Item name='home'>
                                    <Icon name='home'/>
                                    Home
                                </Menu.Item>
                                <Menu.Item name='gamepad'>
                                    <Icon name='gamepad'/>
                                    Games
                                </Menu.Item>
                                <Menu.Item name='camera'>
                                    <Icon name='camera'/>
                                    Channels
                                </Menu.Item>
                            </Sidebar>
                            <Sidebar.Pusher>
                                <div className='admin-page'>
                                    {this.props.children}
                                </div>
                            </Sidebar.Pusher>
                        </Sidebar.Pushable>
                    </Container>
                    <MainFooter/>
                </main>
            </div>
        );
    }
}

AdminMain.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isRealAdmin: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isRealAdmin: !!state.auth.user.admin,
    }
};

export default connect(mapStateToProps)(AdminMain)



