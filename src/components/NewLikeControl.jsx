import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';


class NewLikeControl extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.incrementLike = this.incrementLike.bind(this);
        this.decrementLike = this.decrementLike.bind(this);
    }

    incrementLike() {
        let newCount = this.state.count + 1;
        this.setState({
            count: newCount
        })
    }

    decrementLike() {
        let downCount = this.state.count - 1;
        this.setState({
            count: downCount
        })
    }

    // sortPosts() {
    //     return this.count.sort(())
    // }

    render() {

        return (
            <div>
                <style jsx>{`
                .button-container {
                    margin-top: 70%;
                    // border: 1px solid black;
                    flex-direction: column;
                    display: flex;
                    justify-content: space-between;
                    
                }
                
                
                `}

                </style>
                <Paper>
                <div className="button-container">
                    <div className="like-button-container">
                        <button onClick={this.incrementLike}>⬆️</button>
                    </div>
                    <p>{this.state.count}</p>
                    <div className="unlike-button-container">
                        <button onClick={this.decrementLike}>⬇️</button>
                    </div>
                </div>
                </Paper>

            </div>

        );
    }
}

export default NewLikeControl;