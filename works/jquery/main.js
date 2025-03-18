"use strict";

const commentArr = [];

function createComment(){
    let comment = {
        name: '',
        content: '',
        like: '',
        parsed: ''
    };


    let inptName = $('#name-inpt').val();
    let inptComment = $('#comment-inpt').val();
    let inptLike;
    let likeColor;

    if ($('#check-yes').is(':checked')){
        inptLike = '󰔓';
        likeColor = 'text-green-600';
    }else if ($('#check-no').is(':checked')){
        inptLike = '󰔑';
        likeColor = 'text-red-600';
    }else{
        inptLike = '';
    };

    comment.name = inptName;
    comment.content = inptComment;
    comment.like = inptLike;

    comment.parsed = `
        <article class="comment">
            <div class="comment-title flex itms-center gap-4">
                <h3 class="comment-user font-mono text-stone-900 text-2xl pt-2 mb-2">${inptName}</h3>
                <span style="font-family: nerd;" class="text-4xl mb-2 ${likeColor}">${inptLike}</span>
            </div>
            <p class="comment-text font-mono text-stone-900">${inptComment}</p>
        </article>
    `;

    commentArr.push(comment);
};

function findLastComment(){
    let lastObj = commentArr[commentArr.length -1];
    let insert = lastObj.parsed;
    
    return insert;
};

function pressSubmit(){
    createComment();
    $('.comments-block').append(findLastComment())
    $('.controls')[0].reset();
};

$('#btn-comment').on('click', pressSubmit)

