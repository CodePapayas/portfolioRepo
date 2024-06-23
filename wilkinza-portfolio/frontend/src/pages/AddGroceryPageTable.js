import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';

export const AddGroceriesPageTable = () => {
    const [foodType, setFoodType] = useState('');
    const [datePurchased, setDatePurchased] = useState('');
    const [dateOfExpectedNextPurchase, setDateOfExpectedNextPurchase] = useState('');
    const [dateOfActualNextPurchase, setDateOfActualNextPurchase] = useState('');
    const [qtyPurchased, setQtyPurchased] = useState(0);
    const [qtyRemaining, setQtyRemaining] = useState(0);
    
    const navigate = useNavigate();

    const addGrocery = async () => {
        console.log('addGrocery function called');
        if (foodType === '') {
            alert('Please enter a food type.');
            return;
        }
        if (datePurchased === '') {
            alert('Please enter a date purchased.');
            return;
        }
        if (dateOfExpectedNextPurchase === '') {
            alert('Please enter a date of expected next purchase.');
            return;
        }
        if (dateOfActualNextPurchase === '') {
            alert('Please enter a date of actual next purchase.');
            return;
        }
        if (qtyPurchased === '') {
            alert('Please enter a quantity purchased.');
            return;
        }

        const newGrocery = {
            food_type: foodType,
            date_purchased: new Date(datePurchased),
            date_of_expected_next_purchase: new Date(dateOfExpectedNextPurchase),
            date_of_actual_next_purchase: new Date(dateOfActualNextPurchase),
            qty_purchased: parseInt(qtyPurchased),
            qty_remaining: parseInt(qtyRemaining)
        };

        console.log('New grocery item to add:', newGrocery);

        const response = await fetch('/foodItems', {
            method: 'post',
            body: JSON.stringify(newGrocery),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Response from server:', response);

        if (response.status === 201) {
            alert('Grocery item added successfully.');
            navigate("/groceries"); // Navigate to the list page on success
        } else {
            alert(`Failed to add ${foodType}: ${response.status}`);
        }
    };

    return (
        <>
            <article>
                <h2>Add a Grocery Item</h2>
                <p>Use this form to add a new grocery item to the inventory.</p>
                
                <table id="grocery">
                    <caption>Which grocery item are you adding?</caption>
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
                        <tr>
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
                                        console.log('Add button clicked');
                                        addGrocery();
                                    }}
                                    id="submit"
                                    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                                >
                                    <FaPlus style={{ color: 'green', fontSize: '1.5em' }} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default AddGroceriesPageTable;
