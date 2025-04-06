'use strict';

class FeedItem{
    constructor(title, desc, date, link){
        this.title = title;
        this.titleEl = document.createElement('h2');
        this.titleEl.classList.add('item-title');
        this.titleEl.innerText = title;
        
        this.desc = desc;
        this.descEl = document.createElement('p');
        this.descEl.classList.add('item-desc');
        this.descEl.innerText = desc;
        
        this.date = date;
        this.dateEl = document.createElement('span');
        this.dateEl.classList.add('item-date');
        this.dateEl.innerText = date;

        this.link = link;
        this.linkEl = document.createElement('a');
        this.linkEl.classList.add('item-title__link');
        this.linkEl.href = link;
        this.linkEl.innerText = 'Link';
    }
    renderItem(){
        const display = document.querySelector('.display');
        const article = document.createElement('article');
        article.classList.add('item')

        const articleTitle = this.titleEl;
        articleTitle.appendChild(this.linkEl);

        article.appendChild(articleTitle);
        article.appendChild(this.dateEl);
        article.appendChild(this.descEl);

        display.appendChild(article);
    }
}

const btnLoad = document.querySelector('.btn-load');

async function loadArticles(){
    try{
        const res = await fetch("http://localhost:8080/get-articles");

        if (!res.ok){
            throw new Error (`Response status: ${res.status}`)
        }

        const json = await res.json();
        console.log(res.status);
        

        json.forEach(item => {
            let article = new FeedItem(item.title, item.description, item.date, item.link);
            article.renderItem();
        });
        btnLoad.style.display = 'none';

    }catch (error) {
        console.error(error.message);
    }
}

btnLoad.addEventListener('click', loadArticles);