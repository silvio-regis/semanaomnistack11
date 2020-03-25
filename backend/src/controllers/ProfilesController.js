const connection = require('../database/connection');

module.exports = {
    
    async byOng (req, res) {
        let ong_id = null;

        try {
            ong_id = req.headers.authorization;
        } catch (error) {
            return res.status(401).json([]); 
        }

        const incidents = await connection('incidents')
            .select('*')
            .where('ong_id', ong_id);

        return res.json(incidents);
    }

}