import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'

// class App extends React.Component {
//   state = {
//     answer: 42,
//   }
//   asyncFunc = () => {
//     return Promise.resolve(37)
//   }
//   async componentDidMount() {
//     this.setState({
//       answer: await this.asyncFunc()
//     })
//   }
//   render() {
//     return (
//       <h2>Hello React Component -- {this.state.answer}</h2>
//     )
//   }
// }

// export default App


// Warning: render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.
ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
)
