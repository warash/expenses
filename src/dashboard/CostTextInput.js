import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class CostTextInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        isNewCost: PropTypes.bool
    };

    state = {
        text: this.props.text || ''
    };

    handleSubmit = e => {
        if (e.which !== 13) return;

        const text = e.target.value.trim();
        this.props.onSave(text);
        if (this.props.isNewCost)
            this.setState({ text: '' })
    };

    handleChange = e => {
        this.setState({ text: e.target.value })
    };

    handleBlur = e => {
        if (this.props.isNewCost) return;
        this.props.onSave(e.target.value)
    };

    render() {
        return (
            <input className={
                classnames({
                    edit: this.props.editing,
                    'new-cost': this.props.isNewCost
                })}
                   type="text"
                   placeholder={this.props.placeholder}
                   autoFocus={true}
                   value={this.state.text}
                   onBlur={this.handleBlur}
                   onChange={this.handleChange}
                   onKeyDown={this.handleSubmit}/>
        )
    }
}