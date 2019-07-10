import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CostTextInput from './CostTextInput'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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

    handleSave = (text) => {
        const { id } = this.props.cost;
        if (text.length === 0) {
            this.props.remove(id)
        } else {
            this.props.edit(id, { text })
        }
        this.setState({ editing: false })
    };

    handleRemove = () => {
        const { cost, remove } = this.props;
        remove(cost.id);
    };

    renderEditMode() {
        const { cost } = this.props;
        return (<CostTextInput text={cost.text}
                               editing={true}
                               onSave={this.handleSave}/>);
    }

    renderViewMode() {
        const { cost } = this.props;
        return (<div className="view">
            <span>{cost.text} </span>
            <IconButton aria-label="Delete" onClick={this.handleDoubleClick}>
                <EditIcon fontSize="small"/>
            </IconButton>
            <IconButton aria-label="Delete" onClick={this.handleRemove}>
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </div>)
    }

    render() {
        const { editing } = this.state;
        return editing ? this.renderEditMode() : this.renderViewMode();
    }
}
