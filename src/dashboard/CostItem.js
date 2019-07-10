import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CostTextInput from './CostTextInput'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default class CostItem extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        cost: PropTypes.object.isRequired,
        edit: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired
    };

    state = {
        editing: false
    };

    handleDoubleClick = () => {
        this.setState({ editing: true })
    };

    handleSave = (id, text) => {
        if (text.length === 0) {
            this.props.remove(id)
        } else {
            this.props.edit(id, text)
        }
        this.setState({ editing: false })
    };

    handleRemove = () => {
        const { cost, remove } = this.props;
        remove(cost.id);
    };

    render() {
        const { cost } = this.props;

        let element;
        if (this.state.editing) {
            element = (
                <CostTextInput text={cost.text}
                               editing={this.state.editing}
                               onSave={(text) => this.handleSave(cost.id, text)}/>
            )
        } else {
            element = (
                <div className="view">
                    <label onDoubleClick={this.handleDoubleClick}>
                        {cost.text}
                    </label>

                    <IconButton aria-label="Delete" onClick={this.handleRemove}>
                        <DeleteIcon fontSize="small"/> remove
                    </IconButton>
                </div>
            )
        }

        return (
            <li>
                {element}
            </li>
        )
    }
}