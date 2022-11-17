class Category {
    constructor(inMemDb) {
        this.inMemDb = inMemDb;
    }

    async getCategories(req, res) {
        res.status(200);
        return res.json({payload: this.inMemDb.categories});
    }

    async getLiveVideosForCategory(req, res) {
        const categoryId = req.query.categoryId;
        const categoryVideoMap = this.inMemDb.categoryToLiveVideoMap
        const liveVideoDetails = categoryVideoMap[categoryId]
        res.status(200);
        return res.json({payload: liveVideoDetails});
    }
}

module.exports = Category;
