import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStateChange);
  }


  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleStateChange() {
    this.setState(store.getState());
  };

  handleBtnClick() {
    const action = {
      type: 'add_todo_item'
    };
    store.dispatch(action);
  };

  render() {
    return (
      <div style={{marginTop: 50, marginLeft: 20}}>
        <Input
          placeholder="todo info"
          style={{width: 300, marginRight: 10}}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button
          type="primary"
          onClick={this.handleBtnClick}
        >提交</Button>
        <List
          style={{marginTop: 20, width: 300}}
          size="large"
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoList;