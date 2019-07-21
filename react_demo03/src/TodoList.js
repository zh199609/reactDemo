import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    //当组件的state或者props发生变化时，render函数会重新执行
    this.state = {
      inputInit: '',
      list: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this)
  }


  render() {
    console.log("render……")
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input id='insertArea' className='input' value={this.state.inputInit}
                 onChange={this.handleInputChange} ref={(input)=>{
                   this.input = input;
          }}/>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputInit: value
    }))

    /*this.setState(() => {
      return {
        inputInit: e.target.value
      }
    })*/

    /*this.setState({
      inputInit: e.target.value
    })*/
  }

  handleBtnClick(e) {
    this.setState((prevState) => {
      const list = [...prevState.list, prevState.inputInit];
      const inputInit = '';
      return {
        list,
        inputInit
      }
    },()=>{
      console.log("setState callback")
    })
    /*this.setState({
      list: [...this.state.list, this.state.inputInit],
      inputInit: ''
    })*/
  }

  handleItemDel(index) {
    this.setState((prevState) => {
      // console.log([...prevState.list])
      const {list} = prevState;
      list.splice(index, 1);
      return list
    })

    /*  this.setState({
        list: list
      })*/
  }

  //在组件即将被挂载到页面的时刻自动执行
  componentWillMount() {
    console.log("componentWillMount……")
  }
  //组件被挂载到页面之后会被自动执行
  componentDidMount() {
    console.log("componentDidMount……")
  }
  //组件被更新之前，他会自动被执行
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate……");
    return true;
  }
  //组件更新之前，他会自动执行，在shouldComponentUpdate 之后执行
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("componentWillUpdate……")
  }
  //组件更新之后被自动执行
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate……")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount……")
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <Fragment key={index}>
          <TodoItem
            content={item}
            index={index}
            delItem={this.handleItemDel}
          />
        </Fragment>
      )
    })
  }

}

export default TodoList
