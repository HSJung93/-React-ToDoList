import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoItemList extends Component {

  // 최적화 매번 rendering 하지 않도록

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    //   to do 객체들이 들어있는 배열, 체크박스를 끄고 키는 함수, 아이템을 삭제시키는 함수
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, text, checked}) => (
        <ToDoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}    
      </div>
    );
  }
}

export default ToDoItemList;