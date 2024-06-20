import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GroceryList from '../components/GroceryList';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

function GroceriesPage({ setGrocery }) {
    const navigate = useNavigate();
    const [foodItems, setGroceries] = useState([]);
    const backendUrl = 'https://portfoliorepo.onrender.com';

    const loadGroceries = async () => {
        try {
            const response = await fetch(`${backendUrl}/foodItems`) // Updated URL
            const contentType = response.headers.get('content-type');

            if (contentType && contentType.indexOf('application/json') !== -1) {
                const foodItems = await response.json();
                setGroceries(Array.isArray(foodItems) ? foodItems : []);
            } else {
                console.error('Received non-JSON response:', await response.text());
                setGroceries([]); // Ensure foodItems is an array
            }
        } catch (error) {
            console.error('Failed to fetch groceries:', error);
            setGroceries([]); // Ensure foodItems is an array
        }
    }

    const onEditGrocery = (grocery) => {
        setGrocery(grocery);
        navigate("/editGroceries");
    }

    const onDeleteGrocery = async (_id) => {
        try {
            const response = await fetch(`${backendUrl}/foodItems/${_id}`, { // Updated URL
                method: 'DELETE'
            });
            if (response.status === 200) {
                await loadGroceries();
            } else {
                console.error(`Failed to delete grocery item with id=${_id}, status code=${response.status}`);
            }
        } catch (error) {
            console.error(`Error deleting grocery item with id=${_id}:`, error);
        }
    }

    useEffect(() => {
        loadGroceries();
    }, []);

    return (
        <>
            <h2>Recent Grocery Purchases: Example</h2>
            <article>            
                <p>
                    This is an example of a CRUD application that allows you to add, edit, and delete grocery items. Add a grocery item by clicking the "Add Grocery Item" button below. You can also edit or delete existing grocery items by clicking the edit or delete icons in the table.
                </p>
            </article>

            <nav>            
            <Link to="/addGroceries" className="add-grocery-button">
                <FaPlus /> Add Grocery Item
            </Link>
            </nav>
            <GroceryList 
                foodItems={foodItems}
                onEdit={onEditGrocery} 
                onDelete={onDeleteGrocery} 
            />
        </>
    );
}

export default GroceriesPage;
