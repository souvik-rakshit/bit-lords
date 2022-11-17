class Seller {
    constructor(inMemDb) {
        this.inMemDb = inMemDb;
    }

    async getNearbySellers(req, res) {
        const userId = req.query.userId;
        //need to filter based on the location of the user
        const categoryId = req.query.categoryId;

        const categoryVideoMap = this.inMemDb.categoryToSellerMap
        const liveVideoDetails = categoryVideoMap[categoryId]
        res.status(200);
        return res.json({payload: liveVideoDetails});
    }
}

module.exports = Seller;
