const access='oLCB7vGx2XAm9vyXuGQZ-ob5uLvj_6LUAlh6gCCnYf4';

const searchBar=document.querySelector('#search');
const form=document.querySelector('.input-container');
const submitBtn=document.querySelector('.submit');
const resultDiv=document.querySelector('.search-results-holder');
const showMore=document.querySelector('.show-more');
const dark=document.querySelector('#dark-moon');

let searchValue='';
let page=1;

async function imageResult(){
    searchValue=searchBar.value;
    resultDiv.innerHTML='';
    
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${searchValue}&client_id=${access}`;
    
    const response=await fetch(url);
    const data=await response.json();
    
    const results=data.results;
    if(results.length===0){
        alert('Please Enter Keyword in Search Bar');
        resultDiv.innerHTML='';
    }
    else{
        results.map((result)=>{
            const holderJs=document.createElement('div');
            holderJs.classList.add('first-holder');
    
            const imageJs=document.createElement('img');
            imageJs.src=result.urls.small;
            imageJs.alt=result.alt_description;
            imageJs.classList.add('first-result');
    
            const anchorJs=document.createElement('a');
            anchorJs.href=result.links.html;
            anchorJs.textContent=result.alt_description;
            anchorJs.classList.add('text-link');
            anchorJs.target='_blank';
    
            imageJs.addEventListener('click',()=>{
                window.open(result.links.html,'_blank');
            })
    
            resultDiv.appendChild(holderJs);
            holderJs.appendChild(imageJs);
            holderJs.appendChild(anchorJs);
        })
        
        page++;
        if(page>1){
            showMore.style.display='block';
            showMore.style.display='flex';
        }
    } 
}

async function forShowMore(){
    searchValue=searchBar.value;
    if(page==1){
        resultDiv.innerHTML='';
    }

    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${searchValue}&client_id=${access}`;
    
    const response=await fetch(url);
    const data=await response.json();
    
    const results=data.results;

    results.map((result)=>{
        const holderJs=document.createElement('div');
        holderJs.classList.add('first-holder');

        const imageJs=document.createElement('img');
        imageJs.src=result.urls.small;
        imageJs.alt=result.alt_description;
        imageJs.classList.add('first-result');

        const anchorJs=document.createElement('a');
        anchorJs.href=result.links.html;
        anchorJs.textContent=result.alt_description;
        anchorJs.classList.add('text-link');
        anchorJs.target='_blank';

        imageJs.addEventListener('click',()=>{
            window.open(result.links.html,'_blank');
        })

        resultDiv.appendChild(holderJs);
        holderJs.appendChild(imageJs);
        holderJs.appendChild(anchorJs);
    })
    
    page++;
    if(page>1){
        showMore.style.display='block';
    }
}
form.addEventListener('submit',(e)=>{
    if(searchBar.value===''){
        alert('Please Search something in Search Bar');
    }
    else{
        e.preventDefault();
        imageResult();
        page++;
    }
})
showMore.addEventListener('click',()=>{
    forShowMore();
    page++;
})
const sun=document.querySelector('#sun');
dark.addEventListener('click',()=>{
    const body=document.querySelector('body');
    body.classList.toggle('dark-mode');
    sun.style.display='block';
    dark.style.display='none';
})
sun.addEventListener('click',()=>{
    const body=document.querySelector('body');
    body.classList.toggle('dark-mode');
    sun.style.display='none';
    dark.style.display='block';
})

const imgsrc=document.querySelectorAll('.first-result');
imgsrc.forEach((e)=>{
    e.addEventListener('click',()=>{
        window.open(e.src,'_blank');
    })
})



