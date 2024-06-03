// FLEXBOX CONTAINERS
let jc_container = document.getElementById('jc-container');
let ai_container = document.getElementById('ai-container');

// JUSTIFY CONTENT 
let jcfs = document.getElementById('jc-fs');
jcfs.addEventListener('click', function(){
    // console.log('jcfs button clicked');
    jc_container.style.justifyContent = 'flex-start';
});

let jcfe = document.getElementById('jc-fe');
jcfe.addEventListener('click', function(){
    // console.log('jcfe button clicked');
    jc_container.style.justifyContent = 'flex-end';
});

let jcc = document.getElementById('jc-c');
jcc.addEventListener('click', function(){
    // console.log('jcc button clicked');
    jc_container.style.justifyContent = 'center';
});

let jcsa = document.getElementById('jc-sa');
jcsa.addEventListener('click', function(){
    // console.log('jcsa button clicked');
    jc_container.style.justifyContent = 'space-around';
});

let jcsb = document.getElementById('jc-sb');
jcsb.addEventListener('click', function(){
    // console.log('jcsb button clicked');
    jc_container.style.justifyContent = 'space-between';
});

// ALIGN ITEMS
let aifs = document.getElementById('ai-fs');
aifs.addEventListener('click', function(){
    // console.log('aifs button clicked');
    ai_container.style.alignItems = 'flex-start';
})

let aife = document.getElementById('ai-fe');
aife.addEventListener('click', function(){
    ai_container.style.alignItems = 'flex-end';
})

let aic = document.getElementById('ai-c');
aic.addEventListener('click', function(){
    ai_container.style.alignItems = 'center';
})

let aibase = document.getElementById('ai-base');
aibase.addEventListener('click', function(){
    ai_container.style.alignItems = 'baseline';
})

let aistretch = document.getElementById('ai-stretch');
aistretch.addEventListener('click', function(){
    ai_container.style.alignItems = 'stretch';
})

