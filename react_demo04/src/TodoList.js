import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {getInputChangeActioni, getAddItemAction, getDelItemAction} from "./store/actioniCreators";
import TodoListUI from "./TodoListUI";
import axios from "axios";


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);
    store.subscribe(this.handleStateChange);
  }


  handleInputChange(e) {
    /* const action = {
       type: CHANGE_INPUT_VALUE,
       value: e.target.value
     };*/
    const action = getInputChangeActioni(e.target.value);
    store.dispatch(action);
  }

  handleStateChange() {
    this.setState(store.getState());
  };

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  };

  handleItemDel(index) {
    const action = getDelItemAction(index);
    store.dispatch(action);
  }

  componentWillMount(){
    axios.get('/list.json').then(()=>{

    });
  }


  render() {
    return <TodoListUI
      inputValue={this.state.inputValue}
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      list={this.state.list}
      handleItemDel={this.handleItemDel}
    />
  }
}

export default TodoList;