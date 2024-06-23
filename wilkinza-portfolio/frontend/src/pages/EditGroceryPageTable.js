import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditGroceryPageTable = ({ groceryToEdit }) => {
    const [foodType, setFoodType] = useState('');
    const [datePurchased, setDatePurchased] = useState('');
    const [dateOfExpectedNextPurchase, setDateOfExpectedNextPurchase] = useState('');
    const [dateOfActualNextPurchase, setDateOfActualNextPurchase] = useState('');
    const [qtyPurchased, setQtyPurchased] = useState(0);
    const [qtyRemaining, setQtyRemaining] = useState(0);

    useEffect(() => {
        if (groceryToEdit) {
            setFoodType(groceryToEdit.food_type || '');
            setDatePurchased(groceryToEdit.date_purchased ? new Date(groceryToEdit.date_purchased).toISOString().split('T')[0] : '');
            setDateOfExpectedNextPurchase(groceryToEdit.date_of_expected_next_purchase ? new Date(groceryToEdit.date_of_expected_next_purchase).toISOString().split('T')[0] : '');
            setDateOfActualNextPurchase(groceryToEdit.date_of_actual_next_purchase ? new Date(groceryToEdit.date_of_actual_next_purchase).toISOString().split('T')[0] : '');
            setQtyPurchased(groceryToEdit.qty_purchased || 0);
            setQtyRemaining(groceryToEdit.qty_remaining || 0);

            // Log initial state setup
            console.log('Initial groceryToEdit values set:', {
                foodType: groceryToEdit.food_type,
                datePurchased: groceryToEdit.date_purchased,
                dateOfExpectedNextPurchase: groceryToEdit.date_of_expected_next_purchase,
                dateOfActualNextPurchase: groceryToEdit.date_of_actual_next_purchase,
                qtyPurchased: groceryToEdit.qty_purchased,
                qtyRemaining: groceryToEdit.qty_remaining
            });
        }
    }, [groceryToEdit]);
    
    const navigate = useNavigate();

    const editGrocery = async () => {
        // Debugging statements to log the current state
        console.log("EditGrocery function called with current state values:", {
            food_type: foodType,
            date_purchased: datePurchased,
            date_of_expected_next_purchase: dateOfExpectedNextPurchase,
            date_of_actual_next_purchase: dateOfActualNextPurchase,
            qty_purchased: parseInt(qtyPurchased),
            qty_remaining: parseInt(qtyRemaining)
        });

        const response = await fetch(`/foodItems/${groceryToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                food_type: foodType,
                date_purchased: new Date(datePurchased),
                date_of_expected_next_purchase: new Date(dateOfExpectedNextPurchase),
                date_of_actual_next_purchase: new Date(dateOfActualNextPurchase),
                qty_purchased: Number(qtyPurchased),
                qty_remaining: Number(qtyRemaining)
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log('Response from server:', response);

        if (response.status === 200) {
            alert('Grocery item updated successfully.');
        } else {
            const errMessage = await response.json();
            alert(`Failed to update grocery item: ${response.status}. ${errMessage.Error}`);
        }
        navigate('/groceries');
    }

    return (
        <>
            <article>
                <h2>Edit a Grocery Item</h2>
                <p>Use this form to edit the selected grocery item.</p>
                <table id="grocery">
                    <caption>Edit Grocery Item Details</caption>
                    <thead>
                        <tr>
                            <th>Food Type</th>
                            <th>Date Purchased</th>
                            <th>Date of Expected Next Purchase</th>
                            <th>Date of Actual Next Purchase</th>
                            <th>Quantity Purchased</th>
                            <th>Quantity Remaining</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={groceryToEdit?._id}>
                            <td>
                                <label htmlFor="foodType">Food Type</label>
                                <input
                                    type="text"
                                    placeholder="Type of the food"
                                    value={foodType}
                                    onChange={e => setFoodType(e.target.value)}
                                    id="foodType"
                                />
                            </td>
                            <td>
                                <label htmlFor="datePurchased">Date Purchased</label>
                                <input
                                    type="date"
                                    value={datePurchased}
                                    onChange={e => setDatePurchased(e.target.value)}
                                    id="datePurchased"
                                />
                            </td>
                            <td>
                                <label htmlFor="dateOfExpectedNextPurchase">Expected Next Purchase</label>
                                <input
                                    type="date"
                                    value={dateOfExpectedNextPurchase}
                                    onChange={e => setDateOfExpectedNextPurchase(e.target.value)}
                                    id="dateOfExpectedNextPurchase"
                                />
                            </td>
                            <td>
                                <label htmlFor="dateOfActualNextPurchase">Actual Next Purchase</label>
                                <input
                                    type="date"
                                    value={dateOfActualNextPurchase}
                                    onChange={e => setDateOfActualNextPurchase(e.target.value)}
                                    id="dateOfActualNextPurchase"
                                />
                            </td>
                            <td>
                                <label htmlFor="qtyPurchased">Quantity Purchased</label>
                                <input
                                    type="number"
                                    value={qtyPurchased}
                                    placeholder="Quantity purchased"
                                    onChange={e => setQtyPurchased(e.target.value)} 
                                    id="qtyPurchased"
                                />
                            </td>
                            <td>
                                <label htmlFor="qtyRemaining">Quantity Remaining</label>
                                <input
                                    type="number"
                                    value={qtyRemaining}
                                    placeholder="Quantity remaining"
                                    onChange={e => setQtyRemaining(e.target.value)} 
                                    id="qtyRemaining"
                                />
                            </td>
                            <td>
                                <label htmlFor="submit">Commit</label>
                                <button
                                    type="button"
                                    onClick={() => {
                                        console.log('Edit button clicked');
                                        editGrocery();
                                    }}
                                    id="submit"
                                >Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default EditGroceryPageTable;
