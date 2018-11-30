import React, { Component } from 'react'

//子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
export default class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handelDelete = this.handelDelete.bind(this);
  }
  render() {
    const {content} = this.props;
    return (
      <div onClick={this.handelDelete}>
        {content}
      </div>
    )
  }
  handelDelete(){
    //删除
    //this.props.deleteBtn(this.props.index);
    const { deleteBtn,index } = this.props;
    deleteBtn(index);
  }
}
