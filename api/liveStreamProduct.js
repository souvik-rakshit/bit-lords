class LiveStreamProduct {
    constructor(inMemDb) {
        this.inMemDb = inMemDb;
    }

    async getNearbySellers(req, res) {
        const sellerId = req.query.sellerId;

        const productMap = this.inMemDb.liveStreamProductMap
        const productDetails = productMap[sellerId]
        res.status(200);
        return res.json({payload: productDetails});
    }
}

module.exports = LiveStreamProduct;

