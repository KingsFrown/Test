import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddData from "./AddData"
import AddLR from "./AddLR"

class Rectangle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false,
            typeForm: this.rectangle.name
        }
    }
    rectangle = this.props.rectangle
    render() {
        return (<div className="rectangle" >
            <IoCloseCircleSharp onClick={() => this.props.onDelete(this.rectangle.id)} className="delete-icon"/>
            <IoHammerSharp onClick={() => {
                this.setState({
                    editForm: !this.state.editForm
                })
            }} className="edit-icon"/>  
            <h3>{this.rectangle.name}</h3>

            {((this.state.typeForm === 'Data')&&(this.state.editForm)) && <AddData rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
            {((this.state.typeForm === 'Logistic Regression')&&(this.state.editForm)) && <AddLR rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
        </div>)
  }
}

export default Rectangle