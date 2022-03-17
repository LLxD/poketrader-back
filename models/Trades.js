import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Trade = Schema({
    pokemons_side_A:{
        type: Array,
        required: true,
    },
    pokemons_side_B:{
        type: Array,
        required: true,
    },
    isItFair:{
        type:Boolean,
        required:true,
    }
}) 
const tradesTable = mongoose.model('Trades', Trade)

export default tradesTable