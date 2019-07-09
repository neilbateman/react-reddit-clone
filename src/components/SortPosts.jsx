import React from 'React';
import NewLikeControl from './NewLikeControl';
import {count}

export default class SortPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count,
        };
        this.getVoteCount = this.getVoteCount.bind(this);
    }
    getVoteCount() {
        return this.state.count.filter
    }
}
