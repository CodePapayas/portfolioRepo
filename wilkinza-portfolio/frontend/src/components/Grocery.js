import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Grocery({ grocery, onDelete, onEdit }) {
    return (
        <tr>
            <td>{grocery.food_type}</td>
            <td>{new Date(grocery.date_purchased).toLocaleDateString()}</td>
            <td>{new Date(grocery.date_of_expected_next_purchase).toLocaleDateString()}</td>
            <td>{new Date(grocery.date_of_actual_next_purchase).toLocaleDateString()}</td>
            <td>{grocery.qty_purchased}</td>
            <td>{grocery.qty_remaining}</td>
            <td>
                <FaTrash onClick={() => onDelete(grocery._id)} style={{ cursor: 'pointer', color: 'red' }} />
            </td>
            <td>
                <FaEdit onClick={() => onEdit(grocery)} style={{ cursor: 'pointer', color: 'blue' }} />
            </td>
        </tr>
    );
}

export default Grocery;
