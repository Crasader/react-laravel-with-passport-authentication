import React from 'react'
import {Button,Dimmer, Form, Grid, Header, Loader, Message, Segment} from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Validator} from 'ree-validate'

import PageHeader from '../common/pageHeader'
import {register} from '../../store/services/auth'


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new Validator({
            name: 'required|min:3',
            email: 'required|email',
            password: 'required|min:6',
            password_confirmation: 'required|min:6|confirmed:password'
        });
        this.state = {
            credentials: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
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
            });
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
        this.props.dispatch(register(credentials))
            .catch(({error, statusCode}) => {
                if (statusCode === 422) {

                    const responseError = {
                        isError: true,
                        code: '422',
                        text: 'Oops! Unable to process credentials.'
                    };
                    this.setState({responseError});
                } else if (statusCode === 401) {
                    const responseError = {
                        isError: true,
                        code: '401',
                        text: error
                    };
                    this.setState({responseError});
                }
            })
    }

    componentDidMount(){
        this.setState({
            isLoading: false
        });
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' replace/>
        }
        const {errors} = this.state;
        return (
            <div>
                <PageHeader heading="Register"/>

                <Segment className='page-loader' style={{display: this.state.isLoading ? 'block' : 'none'}}>
                    <Dimmer active inverted>
                        <Loader size='large'>Registering...</Loader>
                    </Dimmer>
                </Segment>

                <Grid
                    textAlign='center'
                    verticalAlign='middle'
                    className='login-form'
                >
                    <Grid.Column style={{maxWidth: '450px'}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Register for new account
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
                                    name='name'
                                    placeholder='Name'
                                    onChange={this.handleChange}
                                />
                                {errors.has('name') && <Header size='tiny' className='custom-error' color='red'>
                                    {errors.first('name')}
                                </Header>}
                                <Form.Input
                                    fluid
                                    icon='mail'
                                    iconPosition='left'
                                    name='email'
                                    placeholder='E-mail address'
                                    onChange={this.handleChange}
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
                                />
                                {errors.has('password') && <Header size='tiny' className='custom-error' color='red'>
                                    {errors.first('password')}
                                </Header>}
                                <Form.Input
                                    fluid
                                    icon='refresh'
                                    iconPosition='left'
                                    name='password_confirmation'
                                    placeholder='Confirm password'
                                    type='password'
                                    onChange={this.handleChange}
                                />
                                    {errors.has('password_confirmation') && <Header size='tiny' className='custom-error' color='red'>
                                        {errors.first('password_confirmation')}
                                    </Header>}
                                <Button color='teal' fluid size='large' onClick={this.handleSubmit}>Register</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Already register ? <Link to='/login' replace>Login</Link>
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