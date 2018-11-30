import React, { Component ,Fragment } from 'react';
import './TodoList.css';

import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    //父组件通过属性的形式向子组件传递参数
    //子组件通过props接受父组件传递过来的参数
    return (
      <React.Fragment>
        <div className="">
          <input type="text" placeholder="请输入内容" onChange={this.handleInputChange} value={this.state.inputValue}/>
          <button type="button" onClick={this.handleBtnClick}>添加</button>
        </div>
        <Fragment>
          <ul>
            {this.getTodoItem()}
          </ul>
        </Fragment>
      </React.Fragment>
    );
  }
  getTodoItem(){
    return(
      this.state.list.map((item,index)=>{
        return <TodoItem deleteBtn={this.handleDelete} content={item} key={index}  index={index}/>
        //return <li key={index} onClick={this.handleItemClickDelete.bind(this,index)}> {item} </li>
      })
    )
  }
  handleInputChange(event){
    //input数据绑定
    this.setState({
      inputValue:event.target.value
    })
  }
  handleBtnClick(){
    //添加
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  /*handleItemClickDelete(index){
    //删除。将要删除的内容，提取出来进行删除，再重新赋值。
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    });

    这种写法性能低下
    this.state.list.splice(index,1);
    this.setState({
      list:this.state.list
    });
}*/
  handleDelete(index){
    //删除。将要删除的内容，提取出来进行删除，再重新赋值。
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    });

    /*这种写法性能低下
    this.state.list.splice(index,1);
    this.setState({
      list:this.state.list
    });*/
  }
}

export default TodoList;
