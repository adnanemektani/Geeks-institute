import React from "react"

class ByggyCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter : 0
      

    }
    handleClick = () => {
      this.setState({ counter: this.state.counter + 1})
    }
  }

  render() {
    return ()
  }
}




function App() {
  

  return (
    <>
     
    </>
  )
}

export default App
