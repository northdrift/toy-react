import { createElement, render, Component } from './toy-react'
class MyComponent extends Component {
  render() {
    return <h2>自定义组件</h2>
  }
}
 
render(<div class="section">
  <h1>ToyReact</h1>
  <MyComponent></MyComponent>
</div>, document.body)