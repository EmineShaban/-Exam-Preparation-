class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []
    }


    addArticle(articleModel, articleName, quantity) {
        let lowArticleModel = articleModel.toLowerCase()
        if (!this.possibleArticles[lowArticleModel]) {
            throw new Error(`This article model is not included in this gallery!`)
        }
        let kartina = this.listOfArticles.find(e => e.articleName === articleName)
        if (this.listOfArticles.includes(kartina) && lowArticleModel === kartina.articleModel) {
            kartina.quantity += quantity
        }
        this.listOfArticles.push({ articleModel: lowArticleModel, articleName, quantity })
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let person = this.guests.find(e => e.guestName === guestName)

        if (this.guests.includes(person)) {
            throw new Error(`${guestName} has already been invited.`)
        }
        if (personality === 'Vip') {
            this.guests.push({ guestName, point: 500, purchaseArticle: 0 })
        } else if (personality === 'Middle') {
            this.guests.push({ guestName, point: 250, purchaseArticle: 0 })
        } else {
            this.guests.push({ guestName, point: 50, purchaseArticle: 0 })
        }
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let kartina = this.listOfArticles.find(e => e.articleName === articleName)
        let person = this.guests.find(e => e.guestName === guestName)
        co
        if (!this.listOfArticles.includes(kartina) && articleModel != kartina[articleModel]) {
            throw new Error (`This article is not found.`)
        }
        if(kartina.quantity = 0){//AAaAAAAAAAAa
            return `The ${articleName} is not available.`
        }
        if(!this.guests.includes(person)){
            return `This guest is not invited.`
        }
        if(this.possibleArticles[articleModel]> person.point){
            return `You need to more points to purchase the article.`
        }




        return `${guestName} successfully purchased the article worth ${kartina[articleModel]} points.`
    }



}
// const artGallery = new ArtGallery('Curtis Mayfield'); console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// const artGallery = new ArtGallery('Curtis Mayfield');console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle'); console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));