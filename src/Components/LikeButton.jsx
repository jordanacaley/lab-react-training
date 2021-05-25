import React, { Component } from "react";

class LikeButton extends Component {

  state = {
    counter: 0,
    color: 'purple',
  };

  likes = "Likes";

  randomColor() {
    const colors = ['purple','blue','green','yellow','orange','red'];
    const myColor = colors[Math.floor(Math.random() * colors.length)];
    return myColor;
  }


  handleIncrement = () => {
    if (this.state.counter === 0) {
      this.likes = "Like"
    } else {
      this.likes = "Likes"
    }

    this.setState({
      counter: this.state.counter + 1,
      color: this.randomColor(),
    });

  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement} className="likeBtn" style={{
          backgroundColor: `${this.state.color}`
          }}>
          {this.state.counter} {this.likes}
        </button>
       </div>
    );
  }
}

export default LikeButton;
