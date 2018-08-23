import React, { Component } from "react";
import { reddits } from "../static-data";

import List from "./list";
import "./app.css";

class App extends Component {
  state = {
    reddits: []
  };

  componentDidMount() {
    this.setState({
      reddits
    });
  }

  onHandleAddCount = redditId => {
    const updateReddits = this.state.reddits.map(reddit => {
      if (reddit.id === redditId) {
        return Object.assign({}, reddit, { likeCount: reddit.likeCount + 1 });
      } else {
        return reddit;
      }
    });
    console.log(updateReddits);
    this.setState({ reddits: updateReddits });
  };

  onHandleMinusCount = redditId => {
    const updateReddits = this.state.reddits.map(reddit => {
      if (reddit.id === redditId && reddit.likeCount !== 0) {
        return Object.assign({}, reddit, { likeCount: reddit.likeCount - 1 });
      } else {
        return reddit;
      }
    });
    console.log(updateReddits);
    this.setState({ reddits: updateReddits });
  };

  sortByLikeCount = (a, b) => {
    return a.likeCount < b.likeCount;
  };

  render() {
    let { reddits } = this.state;
    //console.log({reddits})
    return (
      <div>
        <List
          reddits={reddits}
          onHandleAddCount={this.onHandleAddCount}
          onHandleMinusCount={this.onHandleMinusCount}
          sortByLikeCount={this.sortByLikeCount}
        />
      </div>
    );
  }
}

export default App;
