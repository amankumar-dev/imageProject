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
        alert('Please Enter write Keyword in Search Bar');
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



/*alt_description
: 
"a car driving down a road under a green and purple sky"
blur_hash
: 
"L84WC2t$VtaMLtTVn,epLAX|V_ni"
breadcrumbs
: 
[]
color
: 
"#0c2640"
created_at
: 
"2022-03-02T07:34:57Z"
current_user_collections
: 
[]
description
: 
"Hyundai STARIA surrounded by aurora and stars"
height
: 
2778
id
: 
"erqL3Ce1HpY"
liked_by_user
: 
false
likes
: 
80
links
: 
{self: 'https://api.unsplash.com/photos/erqL3Ce1HpY', html: 'https://unsplash.com/photos/erqL3Ce1HpY', download: 'https://unsplash.com/photos/erqL3Ce1HpY/download?i…wxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNjkyMTY4NDE0fDA', download_location: 'https://api.unsplash.com/photos/erqL3Ce1HpY/downlo…wxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNjkyMTY4NDE0fDA'}
promoted_at
: 
null
slug
: 
"erqL3Ce1HpY"
sponsorship
: 
{impression_urls: Array(0), tagline: 'Connect with Hyundai Motor Group', tagline_url: 'https://www.hyundaimotorgroup.com', sponsor: {…}}
tags
: 
(3) [{…}, {…}, {…}]
topic_submissions
: 
{}
updated_at
: 
"2023-08-15T23:28:21Z"
urls
: 
{raw: 'https://images.unsplash.com/photo-1646206272308-1c…HxjYXJ8ZW58MHx8fHwxNjkyMTY4NDE0fDA&ixlib=rb-4.0.3', full: 'https://images.unsplash.com/photo-1646206272308-1c…J8ZW58MHx8fHwxNjkyMTY4NDE0fDA&ixlib=rb-4.0.3&q=85', regular: 'https://images.unsplash.com/photo-1646206272308-1c…Hx8fHwxNjkyMTY4NDE0fDA&ixlib=rb-4.0.3&q=80&w=1080', small: 'https://images.unsplash.com/photo-1646206272308-1c…MHx8fHwxNjkyMTY4NDE0fDA&ixlib=rb-4.0.3&q=80&w=400', thumb: 'https://images.unsplash.com/photo-1646206272308-1c…MHx8fHwxNjkyMTY4NDE0fDA&ixlib=rb-4.0.3&q=80&w=200', …}
user
: 
{id: 'hfrh7ZJApJQ', updated_at: '2023-08-11T12:16:29Z', username: 'hyundaimotorgroup', name: 'Hyundai Motor Group', first_name: 'Hyundai Motor Group', …}
width
: 
2000 */