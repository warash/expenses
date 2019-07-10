import React from 'react'
import CostItem from './CostItem'


const CostsList = ({ costs, actions }) => (
    <React.Fragment>
        <ul className="expenses-list">
            {costs.map(cost =>
                <CostItem key={cost.id} cost={cost} {...actions} />
            )}
        </ul>
    </React.Fragment>
);


export default CostsList;