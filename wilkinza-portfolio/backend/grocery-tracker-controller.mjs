import 'dotenv/config';
import express from 'express';
import * as foodItems from './grocery-tracker-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.
app.get('/favicon.ico', (req, res) => res.status(204).end());


app.post('/foodItems', (req, res) => {
    foodItems.createFoodItem(
        req.body.food_type, 
        req.body.date_purchased, 
        req.body.date_of_expected_next_purchase, 
        req.body.date_of_actual_next_purchase, 
        req.body.qty_purchased, 
        req.body.qty_remaining
    )
    .then(createdItem => {
        console.log(`"${createdItem.food_type}" has been added to the collection.`);
        res.status(201).json(createdItem);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to create a new food item.' });
    });
});


// RETRIEVE controller ****************************************************
app.get('/foodItems', async (req, res) => {
    console.log('Retrieving all food items');
    try {
        const items = await foodItems.retrieveFoodItems();
        if (items.length > 0) {
            console.log('All food items were retrieved from the collection.');
            res.json(items);
        } else {
            console.log('No food items found.');
            res.status(404).json({ message: 'No food items found.' });
        }
    } catch (error) {
        console.error('Error in retrieving food items:', error);
        res.status(400).json({ Error: 'Failed to retrieve food items.' });
    }
});

// RETRIEVE by ID controller
app.get('/foodItems/:_id', (req, res) => {
    foodItems.retrieveFoodItemByID(req.params._id)
    .then(foodItem => { 
        if (foodItem !== null) {
            console.log(`"${foodItem.food_type}" was retrieved, based on its ID.`);
            res.json(foodItem);
        } else {
            res.status(404).json({ Error: `Food item with ID ${req.params._id} not found.` });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `Failed to retrieve food item with ID ${req.params._id}.` });
    });
});

// UPDATE controller ************************************
app.put('/foodItems/:_id', (req, res) => {
    foodItems.updateFoodItem(
        req.params._id, 
        req.body.food_type, 
        req.body.date_purchased, 
        req.body.date_of_expected_next_purchase, 
        req.body.date_of_actual_next_purchase,
        req.body.qty_purchased, 
        req.body.qty_remaining
    )
    .then(foodItem => {
        console.log(`"${foodItem.food_type}" was updated.`);
        res.json(foodItem);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `Failed to update food item with ID ${req.params._id}.` });
    });
});

// DELETE Controller ******************************
app.delete('/foodItems/:_id', (req, res) => {
    foodItems.deleteFoodItemById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} food item was deleted.`);
                res.status(200).send({ Success: `Food item with ID ${req.params._id} was successfully deleted.` });
            } else {
                res.status(404).json({ Error: `Food item with ID ${req.params._id} not found.` });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: `Failed to delete food item with ID ${req.params._id}.` });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
