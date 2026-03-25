const { getAllItems, getItemByName, createItem, updateItem, deleteItem } = require('../models/menuModel');



const getMenu = async (req, res)=> {
    try{
        const result = await getAllItems();
        res.json(result.rows);
    }catch (err){
        res.status(500).json({message: err.message})
    }
};



const getMenuItem = async (req, res)=>{
    const { name } = req.params
    try {
        const result = await getItemByName(name);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

const addMenuItem = async (req, res)=>{
    const { name, price } = req.body;
    try {
        const result = await createItem(name, price);
        res.json({message: 'Item added successfuly'});
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

const updateMenuItem = async (req, res)=> {
    const { name, price } = req.body;
    const { id } = req.params;
    try{
        const result = await updateItem(id, name, price);
        res.json({message: 'Item updated successfuly'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

const deleteMenuItem = async (req, res)=> {
    const { id } = req.params;
    try{
        const result = await deleteItem(id);
        res.json({message: 'Item deleted successfuly'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {getMenu, getMenuItem, addMenuItem, updateMenuItem, deleteMenuItem};

