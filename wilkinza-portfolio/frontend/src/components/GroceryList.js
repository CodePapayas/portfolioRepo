import React from 'react';
import Grocery from './Grocery';

function GroceryList({ foodItems, onDelete, onEdit }) {
    if (foodItems.length === 0) {
        return <p>No groceries purchased yet!</p>;
    }

    return (
        <table id="grocery">
            <caption>Add and Edit Food Items</caption>
            <thead>
                <tr>
                    <th>Food Type</th>
                    <th>Date Purchased</th>
                    <th>Date of Expected Next Purchase</th>
                    <th>Date of Actual Next Purchase</th>
                    <th>Quantity Purchased</th>
                    <th>Quantity Remaining</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {foodItems.map((grocery, i) => 
                    <Grocery 
                        grocery={grocery} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default GroceryList;
