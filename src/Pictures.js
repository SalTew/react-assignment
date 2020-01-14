import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import App from './App';

class Pictures extends Component {

    constructor(props) {
        super(props);    
        this.state = {
            images: this.props.products,
        };
    }

    render() {
        console.log(this.props.products);
        return (
            <Card>
                <Image
                    src={this.props.cover}
                    alt="Book cover"
                    style={{ width: 330 + 'px', height: 425 + 'px' }}
                />

                <Card.Content>
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Meta>
                        <span className="date" />
                    </Card.Meta>
                    <Card.Description>
                        Written By {this.props.author}
                        <br />
                        <Icon name="book" />
                        {this.props.isbn}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui checkbox">
                        <input
                            type="checkbox"
                            name="example"
                            onChange={this.handleChange}
                        />
                        <label>Did you read this book?</label>
                    </div>
                </Card.Content>
            </Card>

        );
    }

}
export default Pictures