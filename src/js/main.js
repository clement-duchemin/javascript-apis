/* Comment on top of my file */
console.log('test gulp');

function test() {   
}


/* Another comment */
/* Last comment before the end of the world! */


/* get all product */




fetch('https://dummyjson.com/products?limit=24')
.then(response => response.json())
.then(response => {
    results = response.products
    resultsDiv = "";
    for(let i = 0; i < results.length; i++){
       //console.log(results[i]);
       let starsNotation = getStars(results[i].rating);
       let backgroundColor = getBackgroundPrice(results[i].price);
       resultsDiv += `
       <div class="col mb-5">
           <div class="card ${backgroundColor} h-100">
               <img class="card-img-top"
                   src="${results[i].images[0]}"
                   alt="...">
               <!-- Product details-->
               <div class="card-body p-4">
                   <div class="text-center">
                       <!-- Product name-->
                       <h6 class="fw-bolder">${results[i].brand}</h6>
                       <h5 class="fw-bolder">${results[i].title}</h5>
                       <h6 class="fw-bolder">${starsNotation}</h6>
                       <!-- Product price-->
                       ${results[i].price} €
                   </div>
               </div>
               <!-- Product actions-->
               <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                   <div class="text-center">
                       <a class="btn btn-outline-dark mt-auto" href="single-product.html">View Product</a>
                   </div>
               </div>
           </div>
       </div>
       `;
    }
    injectInHTML('products_list', resultsDiv);
})
.catch(console.error);

function displayPosts(posts){
    let postsDiv = "";
    for( let i = 0; i< posts.length; i++){
        post = posts[i];
        postsDiv += `
        <div class="col-lg-6">
        <div class="card mb-4">
            <a href="#!"><img class="card-img-top"
                    src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                    alt="..."></a>
            <div class="card-body">
                <div class="small text-muted">${post.tags[0]}</div>
                <h2 class="card-title h4">${post.title}</h2>
                <p class="card-text">${post.body}</p>
                <a class="btn btn-primary" href="single-post.html">Read more →</a>
            </div>
        </div>
    </div>
        `;
    }
    injectInHTML('posts_list', postsDiv);
}
function injectInHTML(target, htmlData){
    document.getElementById(target).innerHTML = htmlData
}
function getPosts(){
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(response => {
            displayPosts(response.posts)
    })
    .catch(console.error);
}
function getBackgroundPrice(price){
    if(price <= 100){
        backgroundColor = "bg-dark text-light";
    }else{
         backgroundColor = "bg-light";
    }
    return backgroundColor;
}
function getStars(rating){
    let starsNotation = "";
       if(rating >= 1 && rating < 2){
              starsNotation += `⭐`;
        }else if(rating >= 2 && rating < 3){
                starsNotation += `⭐⭐`;
        }else if(  rating >= 3 && rating < 4){
                starsNotation += `⭐⭐⭐`;
        }else if(  rating >= 4 && rating < 5){
                starsNotation += `⭐⭐⭐⭐`;
        }else if(  rating == 5){
                starsNotation += `⭐⭐⭐⭐⭐`;
        }
    return starsNotation;
}




getPosts();