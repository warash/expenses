import React from 'react'
import PropTypes from 'prop-types'
import CostTextInput from './CostTextInput'

const NewCostInput = ({ add }) => {

    const onSave = (text) => {
        if (text.length === 0) return;
        add(text)
    };

    return (<header className="header">
            <h1>todos</h1>
            <CostTextInput
                isNewCost
                onSave={onSave}
                placeholder="What needs to be done?"
            />
        </header>
    )
};

NewCostInput.propTypes = {
    add: PropTypes.func.isRequired
};

export default NewCostInput