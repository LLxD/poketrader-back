import tradesTable from '../models/Trades.js';
class AddTrade{
    static async Add(req, res){
        const newTrade = {
            pokemons_side_A: req.body.pokemons_side_A,
            pokemons_side_B: req.body.pokemons_side_B,
            isItFair: req.body.isItFair
        }
        const resposta = await new tradesTable(newTrade).save()
        res.status(200).send(resposta);
    }

    static async AllTrades(req, res){
        const resposta = await tradesTable.find()
        res.status(200).send(resposta);
    }

}


export default AddTrade