console.log('connected')
listOfShows=document.getElementById('shows')
formSearch=document.getElementById('formSearch')



//Example: https://api.tvmaze.com/search/shows?q=girls

res=axios.get('https://api.tvmaze.com/search/shows?q=girls')

searchShows= async(query)=>{
    res=await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    res=res.data
    console.log(res)
    return res
}


formSearch.addEventListener('submit', async(e)=>{
    e.preventDefault();
    query=formSearch.elements.name.value
    res=await searchShows(query);
    for(let e of res){
        createArticle(e)
    }
    
    
});

function createArticle(res){
    //initialization
    console.log('res is',res)
    let {score, show}=res
    console.log('score is',score)
    console.log('show is',show)

    article=document.createElement('article')
    img=document.createElement('img')
    txt=document.createElement('label')
    let {name,image:picture}=show

    //declaration
    txt.append(name)
    img.setAttribute('src',picture['original'])

    //Nesting
    article.appendChild(txt);
    article.append(img)
    listOfShows.appendChild(article)





}



