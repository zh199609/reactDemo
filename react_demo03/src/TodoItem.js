import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {content} = this.props;
    return (
      <li onClick={this.handleClick}>{content}</li>
    )
  }

  handleClick() {
    /*调用父组件方法*/
    const {delItem,index} = this.props;
    delItem(index);
  }
}

export default TodoItem;