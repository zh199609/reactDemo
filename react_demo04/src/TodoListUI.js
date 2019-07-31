import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
/*无状态组件 效率高*/
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: 50, marginLeft: 20}}>
      <Input
        placeholder="todo info"
        style={{width: 300, marginRight: 10}}
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button
        type="primary"
        onClick={props.handleBtnClick}
      >提交</Button>
      <List
        style={{marginTop: 20, width: 300}}
        size="large"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item
          onClick={() => {
            props.handleItemDel(index)
          }}>{item}</List.Item>}
      />
    </div>
  )
}

/*class TodoListUI extends Component {
  render() {
    return (
      <div style={{marginTop: 50, marginLeft: 20}}>
        <Input
          placeholder="todo info"
          style={{width: 300, marginRight: 10}}
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
        />
        <Button
          type="primary"
          onClick={this.props.handleBtnClick}
        >提交</Button>
        <List
          style={{marginTop: 20, width: 300}}
          size="large"
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => <List.Item
            onClick={() => {
              this.props.handleItemDel(index)
            }}>{item}</List.Item>}
        />
      </div>
    )
  }
}*/

export default TodoListUI;