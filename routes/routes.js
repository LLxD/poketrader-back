import Express from 'express';
import Trading from '../controllers/trading_controller.js';
import Load from '../controllers/loading_controller.js';
const router = Express.Router()

router.get('/', Load.Initial)
router.post('/addTrade', Trading.Add)
router.get('/allTrades', Trading.AllTrades)


export default router