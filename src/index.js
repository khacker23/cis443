import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick=
    {this.props.onClick}>
    {this.props.squares}
    {this.props.value}
    </button>
  );
}

class Grid extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isIconVisible : "",
      squares: Array(30).fill(null)
    }
    this.handleClick = this.handleClick.bind(this);
    this.displayIcon = this.displayIcon.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
  }

  renderSquare(i) {
    return React.Children.map(this.props.squares, Square => {
      return React.cloneElement(Square, {
        value : this.props.squares[i],
        onClick : this.displayIcon()
      });
    });
    /* return (
    <Square 
      value={this.props.squares[i]}
      onClick={() => this.displayIcon()}
       />
    ); */
  }
  
  displayIcon() {
    this.setState(this.isIconVisible ? <img src="https://firebasestorage.googleapis.com/v0/b/project-12e14.appspot.com/o/images%2Ffileicon2.png?alt=media&token=f4726298-d91d-4d4f-905d-1933002993e6" alt="File Icon" height="98" width="98" /> : "");
    }

    handleClick() {
      this.setState(state => ({
        isIconVisible: !state.isIconVisible
      }));
    }

  render() {
    
    return (
      <div>
        <div className="grid">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="grid">
          {this.renderSquare(10)}
          {this.renderSquare(12)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
        <div className="grid">
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        </div>
      </div>
      
    )
  }
}

ReactDOM.render(<Grid />, document.getElementById("root"));
