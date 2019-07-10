import React from 'react'
import CostItem from './CostItem'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CostTextInput from './CostTextInput';

const CostsList = ({ costs, actions }) => (
    <React.Fragment>
        <CostTextInput
            isNewCost
            placeholder="What needs to be done?"
        />
        <List>
            {costs.map(cost =>
                <ListItem key={cost.id}>
                    <CostItem cost={cost} {...actions} />
                </ListItem>
            )}
        </List>
    </React.Fragment>
);


export default CostsList;
