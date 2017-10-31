import React from 'react'
import {
    Button,
    Divider,
    Dimmer,
    Form,
    Grid,
    Header,
    Icon,
    Loader,
    Message,
    Segment} from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Validator} from 'ree-validate'

import PageHeader from '../common/pageHeader'
import {login} from "../../store/services/auth";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new Validator({
            email: 'required|email',
            password: 'required|min:6'
        });

        this.state = {
            credentials: {
                email: '',
                password: ''
            },
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
            isLoading: false,
            errors: this.validator.errorBag
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFacebook = this.handleFacebook.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        const {credentials} = this.state;
        credentials[name] = value;
        this.validator.validate(name, value)
            .then(() => {
                const {errorBag} = this.validator;
                this.setState({errors: errorBag, credentials})
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isLoading: true
        });
        const {credentials} = this.state;
        this.validator.validateAll(credentials)
            .then(success => {
                if (success) {
                    this.submit(credentials);
                }
            });
    }

    submit(credentials) {
        this.props.dispatch(login(credentials))
            .catch(({error, statusCode}) => {
                if (statusCode === 422) {
                    const responseError = {
                        isError: true,
                        code: '422',
                        text: 'Oops! Unable to process credentials.'
                    };
                    this.setState({responseError});
                    this.setState({
                        isLoading: false
                    });
                } else if (statusCode === 401) {
                    const responseError = {
                        isError: true,
                        code: '401',
                        text: error
                    };
                    this.setState({responseError});
                    this.setState({
                        isLoading: false
                    });
                }
            })

    }

    handleFacebook (){
        console.log("Facebook Button is clicked");
    }

    componentDidMount(){
        this.setState({
            isLoading: false
        });
    }

    render() {
        if (this.props.isAuthenticated) {
            if(this.props.isAdmin){
                return <Redirect to='/admin/dashboard' replace/>
            }
            return <Redirect to='/dashboard' replace/>
        }
        const {errors} = this.state;

        return (
            <div>
                <PageHeader heading="Login"/>

                <Segment className='page-loader' style={{display: this.state.isLoading ? 'block' : 'none'}}>
                    <Dimmer active inverted>
                        <Loader size='large'>Authenticating...</Loader>
                    </Dimmer>
                </Segment>

                <Grid
                    textAlign='center'
                    verticalAlign='middle'
                    className='login-form'
                >
                    <Grid.Column style={{maxWidth: '450px'}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Login to your account
                        </Header>
                        {this.state.responseError.isError && <Message negative>
                            <Message.Content>
                                {this.state.responseError.text}
                            </Message.Content>
                        </Message>}
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    name='email'
                                    placeholder='E-mail address'
                                    onChange={this.handleChange}
                                    error={errors.has('email')}
                                />
                                {errors.has('email') && <Header size='tiny' className='custom-error' color='red'>
                                            {errors.first('email')}
                                </Header>}
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    name='password'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handleChange}
                                    error={errors.has('password')}
                                />
                                {errors.has('password') && <Header size='tiny' className='custom-error' color='red'>
                                        {errors.first('password')}
                                </Header>}
                                <Button color='teal' fluid size='large' onClick={this.handleSubmit}>Login</Button>
                                <Divider horizontal>Or</Divider>
                                <Button color='facebook' fluid size='large' onClick={this.handleFacebook}>
                                    <Icon name='facebook' />Login with Facebook
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <Link to='/register' replace>Register</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Page;
