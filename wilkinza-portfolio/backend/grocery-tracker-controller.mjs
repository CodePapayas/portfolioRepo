import 'dotenv/config';
import express from 'express';
import * as foodItems from './grocery-tracker-model.mjs';
import nodemailer from 'nodemailer';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// CORS configuration to allow multiple origins
const allowedOrigins = ['https://portfoliorepo.onrender.com/', 'http://localhost:3000', 'http://127.0.0.1:3000'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type'
}));

app.use(express.json());

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.post('/api/contact', async (req, res) => {
    const { name, message, email, phoneNumber } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other email services
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Contact form submission from ${name}`,
        text: `${message}\n\nEmail: ${email}\n\nPhone Number: ${phoneNumber}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending message');
    }
});

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

// RETRIEVE controller
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

// UPDATE controller
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

// DELETE Controller
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
