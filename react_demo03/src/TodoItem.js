import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    console.log("todoItem render")
    const {content} = this.props;
    return (
      <li onClick={this.handleClick}>{content}</li>
    )
  }

  handleClick() {
    /*调用父组件方法*/
    const {delItem, index} = this.props;
    delItem(index);
  }

  //当一个组件从父组件接受参数
  //只要父组件的render函数被重新被执行 子组件的的这个生命周期函数被执行
  //如果这个组件第一次存在于父组件中，不会被执行
  //如果这个组件之前已经存在于父组件中，才会被执行
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("todoItem------componentWillReceiveProps……")
  }

  //当这个组件即将被从页面中剔除的时候才会被执行
  componentWillUnmount() {
    console.log("todoItem------componentWillUnmount……")
  }


  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("todoItem shouldComponentUpdate")
    if (nextProps.content !== this.props.content) {
     console.log("true")
      return true;
    }else{
     console.log("false")
      return false;
    }
  }


}

export default TodoItem;