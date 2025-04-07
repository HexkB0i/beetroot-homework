'use strict';

class FeedItem{
    constructor(title, desc, date, link, content, img){
        this.title = title;
        this.titleEl = document.createElement('h2');
        this.titleEl.classList.add('item-title');
        this.titleEl.innerText = title;
        
        this.desc = desc;
        this.descEl = document.createElement('p');
        this.descEl.classList.add('item-desc');
        this.descEl.innerHTML = desc;
        
        this.date = date;
        this.dateEl = document.createElement('span');
        this.dateEl.classList.add('item-date');
        this.dateEl.innerText = date;

        this.link = link;
        this.linkEl = document.createElement('a');
        this.linkEl.classList.add('item-title__link');
        this.linkEl.href = link;
        this.linkEl.innerText = 'Link';

        this.content = content;
        this.contentEl = document.createElement('div');
        this.contentEl.classList.add('content');
        this.contentEl.innerHTML = this.content;
        this.contentEl.querySelectorAll('a').forEach(link => link.remove())
        
        this.img = img;
        this.imgEl = document.createElement('img');
        this.imgEl.classList.add('content-image')
        this.imgEl.setAttribute('src', this.img);

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

        let itemContentBlock = document.createElement('div');
        itemContentBlock.classList.add('item-content');
        
        let collapsibleBtn = document.createElement('button');
        collapsibleBtn.classList.add('collapsible');
        collapsibleBtn.innerText = 'Read More';
        collapsibleBtn.setAttribute('type', 'button')
        itemContentBlock.appendChild(collapsibleBtn);

        this.contentEl.appendChild(this.imgEl);
        let callToAction = document.createElement('span');
        callToAction.innerText = 'Read more via the link...';
        this.contentEl.appendChild(callToAction);

        itemContentBlock.appendChild(this.contentEl);

        article.appendChild(itemContentBlock);

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
            let article = new FeedItem(item.title, item.description, item.date, item.link, item.content, item.img);
            article.renderItem();
            console.log(item);
            
        });
        btnLoad.style.display = 'none';
        
        let coll = document.getElementsByClassName("collapsible");
        let i;
    
        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            }
        });
        }

    }catch (error) {
        console.error(error.message);
    }
}

btnLoad.addEventListener('click', loadArticles);