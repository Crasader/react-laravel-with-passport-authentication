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
                <PageHeader heading="Not Found"/>
                <Container style={{minHeight:'500px'}}>
                    <Header as="h1">Sorry ! you lost in space :)</Header>
                </Container>
            </div>

        );
    }
}

export default Page;
