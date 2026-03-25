const pool = require('../db');



const getAllItems = () => {
    return pool.query('SELECT * FROM menu_items');
};

const getItemByName = (name) => {
    return pool.query('SELECT * FROM menu_items WHERE item_name = $1', [name]);
};

const createItem = (name, price) =>{
    return pool.query('INSERT INTO menu_items (item_name, item_price) VALUES ($1, $2)', [name, price]);
};

const updateItem = (id, name, price) => {
    return pool.query('UPDATE menu_items SET  item_name = $1, item_price = $2 WHERE item_id = $3 ', [name, price, id]);
};

const deleteItem = (id) => {
    return pool.query('DELETE FROM menu_items WHERE item_id = $1', [id])
}


module.exports = { getAllItems, getItemByName, createItem, updateItem, deleteItem };