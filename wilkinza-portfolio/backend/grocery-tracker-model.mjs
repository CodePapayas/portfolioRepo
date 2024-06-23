// Import dependencies.
import mongoose from "mongoose";
import "dotenv/config";

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;



// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: "Unable to connect to MongoDB" });
    } else  {
        console.log("Success: Connected to MongoDB. You did it!");
    }
});

  
  const foodItemSchema = new mongoose.Schema({
    food_type: { type: String, required: true },
    date_purchased: { type: Date, default: Date.now, required: true },
    date_of_expected_next_purchase: { type: Date, default: Date.now, required: true },
    date_of_actual_next_purchase: { type: Date, default: Date.now, required: true},
    qty_purchased: { type: Number, default: 0, required: true},
    qty_remaining: { type: Number }
  });
  
  const foodItems = mongoose.model('foodItem', foodItemSchema);

// CREATE model *****************************************
const createFoodItem = async (food_type, date_purchased, date_of_expected_next_purchase, date_of_actual_next_purchase, qty_purchased, qty_remaining) => {
    const foodItem = new foodItems({ 
        food_type: food_type, 
        date_purchased: date_purchased, 
        date_of_expected_next_purchase: date_of_expected_next_purchase, 
        date_of_actual_next_purchase: date_of_actual_next_purchase, 
        qty_purchased: qty_purchased,
        qty_remaining: qty_remaining 
    });
    return foodItem.save();
}

// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveFoodItems = async () => {
    const query = foodItems.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveFoodItemByID = async (_id) => {
    const query = foodItems.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteFoodItemById = async (_id) => {
    const result = await foodItems.deleteOne({_id: _id});
    return result.deletedCount;
};

// UPDATE model *****************************************************
const updateFoodItem = async (_id, food_type, date_purchased, date_of_expected_next_purchase, date_of_actual_next_purchase, qty_purchased, qty_remaining) => {
    try {
        const result = await foodItems.replaceOne(
            { _id: _id },
            {
                food_type: food_type,
                date_purchased: date_purchased,
                date_of_expected_next_purchase: date_of_expected_next_purchase,
                date_of_actual_next_purchase: date_of_actual_next_purchase,
                qty_purchased: qty_purchased,
                qty_remaining: qty_remaining
            }
        );

        if (result.modifiedCount === 1) {
            console.log('Update successful');
        } else {
            console.log('No document matched the provided query.');
        }

        return { 
            _id: _id, 
            food_type: food_type,
            date_purchased: date_purchased,
            date_of_expected_next_purchase: date_of_expected_next_purchase,
            date_of_actual_next_purchase: date_of_actual_next_purchase,
            qty_purchased: qty_purchased,
            qty_remaining: qty_remaining 
        };
    } catch (error) {
        console.error('Error updating food item:', error);
        throw new Error('Failed to update food item');
    }
};


// EXPORT the variables for use in the controller file.
export { createFoodItem, retrieveFoodItems, retrieveFoodItemByID, updateFoodItem, deleteFoodItemById }
