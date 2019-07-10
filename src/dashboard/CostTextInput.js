import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default class CostTextInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        value: PropTypes.string,
        category: PropTypes.string,
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
        const currencies = [
            {
                value: 'USD',
                label: '$',
            },
            {
                value: 'EUR',
                label: '€',
            },
            {
                value: 'BTC',
                label: '฿',
            },
            {
                value: 'JPY',
                label: '¥',
            },
        ];
        const {text, value, category} = this.state;
        return (
            <React.Fragment>
                <TextField
                    label="Value"
                    value={value}
                    type="number"
                    margin="normal"
                />
                <TextField
                    label="Name"
                    value={text}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit}
                    margin="normal"
                />
                <TextField
                    select
                    label="Select"
                    helperText="Please select your currency"
                    margin="normal">
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </React.Fragment>

        )
    }
}
