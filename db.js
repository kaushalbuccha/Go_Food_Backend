const mongoose = require('mongoose')
require('dotenv').config();
const mongoURI = process.env.REACT_APP_MONGO_URI;

const mongoDB = async()=>{
    
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        // console.log(data);
        global.food_items = data;
        // console.log(global.food_items);

        const foodCategory = mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();
        global.foodCategory = catData;
    } 
    catch (error) {
        console.error('Error occurred while connecting to MongoDB:', error);
    }
}
module.exports = mongoDB;