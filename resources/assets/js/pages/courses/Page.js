/**
 * Created by Sumit-Yadav on 05-10-2017.
 */
import  React from 'react'
import {Container,Header} from 'semantic-ui-react'
import PageHeader from '../common/pageHeader'

class Page extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <PageHeader heading="Courses"/>
                <Container textAlign='center' style={{minHeight:'500px'}}>
                    <Header as="h1">Cool to see this here !</Header>
                </Container>
            </div>

    );
    }
    }
    export default Page;
