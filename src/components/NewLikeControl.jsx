import React from 'react';
import PropTypes from 'prop-types';

class NewLikeControl extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.incrementLike = this.incrementLike.bind(this);
    }

    incrementLike() {
        let newCount = this.state.count +1;
        this.setState({
            count: newCount
        })
    }

    render() {

        return (
            <div className="button-container">
                <button onClick={this.incrementLike}>Likes {this.state.count}</button>
            </div>
        );
    }
}

export default NewLikeControl;