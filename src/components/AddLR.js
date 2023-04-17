import React from "react"

class AddLR extends React.Component {
  rectangleAdd = {}
  constructor(props) {
    super(props)
    this.state ={
        dataframe: '',
        x_column: '',
        y_column: ''
    }
  }

  render() {
    return (
      <div>
        <form ref={(el) => this.myForm = el}>
            <input placeholder="DataFrame" onChange={(e) => this.setState({dataframe: e.target.value})}/>
            <input placeholder="X column" onChange={(e) => this.setState({x_column: e.target.value})}/>
            <input placeholder="Y column" onChange={(e) => this.setState({y_column: e.target.value})}/>
            <button type='button' onClick={() => {
              this.myForm.reset()
              this.rectangleAdd = {
                dataframe: this.state.dataframe,
                x_column: this.state.x_column,
                y_column: this.state.y_column
              }
              if(this.props.rectangle)
                this.rectangleAdd.id = this.props.rectangle.id
                this.rectangleAdd.name = this.props.rectangle.name
              this.props.onAdd(this.rectangleAdd)
            }
            }>Добавить</button>
        </form>
      </div>

    )
  }
}

export default AddLR