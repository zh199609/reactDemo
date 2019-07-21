import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {content,test} = this.props;
    return (
      <li onClick={this.handleClick}>{test}--{content}</li>
    )
  }

  handleClick() {
    /*调用父组件方法*/
    const {delItem, index} = this.props;
    delItem(index);
  }
}
/*规定参数类型*/
TodoItem.propTypes = {
  content: PropTypes.string,
  delItem: PropTypes.func,
  index:PropTypes.number,
  test:PropTypes.string.isRequired
}
TodoItem.defaultProps = {
  test:"hello"
}
export default TodoItem;