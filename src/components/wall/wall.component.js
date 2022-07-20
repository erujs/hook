import React from "react";
import { Segment, Form, TextArea, Image, Header, Button, Divider } from "semantic-ui-react";
import classes from "./wall.module.scss";

const Wall = () => {
    return (
        <>
            {/* move to another component */}
            <Segment className={classes.wall}>
                <Form>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        placeholder='Opinion'
                    />
                    <Button basic fluid color='blue'>
                        Post
                    </Button>
                </Form>
            </Segment>

            <Segment.Group className={classes.wall}>
                <Segment inverted>
                    <Header as='h2'>
                        <Image circular src={require('../assets/Jerus.jpg')} /> Richard Feynman (@ProfFeynman)
                    </Header>
                </Segment>
                <Segment inverted>
                    If you want to master something, teach it. The more you teach, the better you learn. Teaching is a powerful tool to learning.
                </Segment>
                <Segment inverted>
                    <Button
                        basic
                        color='red'
                        content='Like'
                        icon='heart'
                        label={{
                            basic: true,
                            color: 'red',
                            pointing: 'left',
                            content: '2,048',
                        }}
                    />
                    <Button
                        basic
                        color='blue'
                        content='Share'
                        icon='fork'
                        label={{
                            basic: true,
                            color: 'blue',
                            pointing: 'left',
                            content: '2,048',
                        }}
                    />
                </Segment>
                <Divider />
                <Segment inverted>
                    <Header as='h2'>
                        <Image circular src={require('../assets/red.jpg')} /> Je (@Saez_uri)
                    </Header>
                </Segment>
                <Segment inverted>
                    Your past-times, consisted of the strange<br />And twisted and deranged<br />And I hate that little game you had called<br />Crying
                </Segment>
                <Segment inverted>
                    <Button
                        basic
                        color='red'
                        content='Like'
                        icon='heart'
                        label={{
                            basic: true,
                            color: 'red',
                            pointing: 'left',
                            content: '6969',
                        }}
                    />
                    <Button
                        basic
                        color='blue'
                        content='Share'
                        icon='fork'
                        label={{
                            basic: true,
                            color: 'blue',
                            pointing: 'left',
                            content: '69',
                        }}
                    />
                </Segment>
                <Divider />
                <Segment inverted>
                    <Header as='h2'>
                        <Image circular src={require('../assets/Jhassel.jpg')} /> Lorem Ipsum (@LoremIpsum)
                    </Header>
                </Segment>
                <Segment inverted>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et enim gravida, semper justo nec, scelerisque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam auctor felis nec velit bibendum sodales. Proin viverra, nunc vel pretium imperdiet, lorem est consectetur mi, non gravida justo eros et augue. Curabitur vehicula dui urna, mattis lobortis turpis vestibulum vitae. Proin vel diam dapibus, facilisis ante gravida, aliquet urna. Pellentesque hendrerit, erat id consectetur porta, ex mi ullamcorper arcu, eu faucibus eros leo at lacus. Vestibulum posuere magna enim, non molestie velit facilisis vitae. Cras erat sem, vulputate nec ipsum ac, maximus pellentesque diam.
                </Segment>
                <Segment inverted>
                    <Button
                        basic
                        color='red'
                        content='Like'
                        icon='heart'
                        label={{
                            basic: true,
                            color: 'red',
                            pointing: 'left',
                            content: '1234',
                        }}
                    />
                    <Button
                        basic
                        color='blue'
                        content='Share'
                        icon='fork'
                        label={{
                            basic: true,
                            color: 'blue',
                            pointing: 'left',
                            content: '123',
                        }}
                    />
                </Segment>
            </Segment.Group>
        </>
    )
}

export default Wall;