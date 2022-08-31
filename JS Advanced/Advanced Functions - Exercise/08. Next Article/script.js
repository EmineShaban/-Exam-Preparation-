function getArticleGenerator(articles) {
    return () => {
        
        if (articles.length > 0) {
            let show = document.getElementById('content')
            let n = document.createElement('article')
            n.textContent = articles.shift()
            show.appendChild(n)
        }
        // show.textContent = ''
        //     }
        // console.log(articles)
    }
}
