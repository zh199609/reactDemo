import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputInit: '添加 todo list',
      list: ['学习英文', '学习React']
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this)
  }


  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input id='insertArea' className='input' value={this.state.inputInit}
                 onChange={this.handleInputChange}/>
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
      console.log(list)
      list.splice(index, 1);
      return list
    })

    /*  this.setState({
        list: list
      })*/
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
