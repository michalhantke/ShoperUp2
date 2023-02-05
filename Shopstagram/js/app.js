const tab = ["Ojciec", "Abraham", "miał", 7, "synów"];
console.log(tab.includes(7));

const tab2 = ["Ojciec Abraham miał 7 synów", "7 synów miał Ojciec Abraham", "A oni siedli i nic nie jedli", "Tylko śpiewali sobie tak"];
let tab3 = [];
for (let i=0; i < tab2.length; i++) {
    tab3.push(tab2[i].split(" "));
}
console.log(tab3)

const elements = [
    {
      name: "John Doe",
      place: "Szczecin, Polska",
      imgsrc: "https://placehold.jp/128x128.png",
      postimgsrc: "https://placehold.jp/2048x2048.png",
      postimgalt: "Rekordowe wzrosty na gieldzie",
      content: "<strong>Will Smith:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus!",
      likes: "<strong>Liczba polubień: 2</strong>",
    },
    {
        name: "Lisa",
        place: "Kraków, Polska",
        imgsrc: "https://placehold.jp/128x128.png",
        postimgsrc: "https://placehold.jp/1152x2048.png",
        postimgalt: "Targi e-commerce",
        content: "<strong>Will Smith:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus!",
        likes: "<strong>Liczba polubień: 2</strong>",
    },
    {
        name: "Cristiano",
        place: "Kraków, Polska",
        imgsrc: "https://placehold.jp/128x128.png",
        postimgsrc: "https://placehold.jp/2048x1536.png",
        postimgalt: "Targi e-commerce",
        content: "<strong>Will Smith:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus!",
        likes: "<strong>Liczba polubień: 2</strong>",
    }
  ];

const postcontainer = document.querySelector(".post-container");

elements.map(function(element, index) {
    const post = document.createElement("article");
    post.setAttribute("class", "post");
    
    const postheader = document.createElement("div");
    postheader.setAttribute("class", "post__header");
    
    const userdetails = document.createElement("div");
    userdetails.setAttribute("class", "user-details");
    
    const userdetailscontent = document.createElement("div");
    userdetailscontent.setAttribute("class", "user-details__content");
    
    const h3 = document.createElement("h3");
    h3.innerText = element.name;
    
    const place = document.createElement("p");
    place.innerText = element.place;
    
    const userdetailsimg = document.createElement("div");
    userdetailsimg.setAttribute("class", "user-details__img");
    
    const imagesquareimagesquaresmallisactive = document.createElement("div");
    imagesquareimagesquaresmallisactive.setAttribute("class", "image-square image-square--small is-active");
    
    const img = document.createElement("img");
    img.setAttribute("src", element.imgsrc);
    img.setAttribute("alt", element.name);
    
    const postcontent = document.createElement("div");
    postcontent.setAttribute("class", "post__content");
    
    const postimg = document.createElement("div");
    postimg.setAttribute("class", "post__img");
    
    const postimgimg = document.createElement("img");
    postimgimg.setAttribute("src", element.postimgsrc);
    postimgimg.setAttribute("alt", element.postimgalt);
    
    const postdetails = document.createElement("div");
    postdetails.setAttribute("class", "post__details");
    
    const postcomments = document.createElement("div");
    postcomments.setAttribute("class", "post__comments");

    const p = document.createElement("p");
    p.innerHTML = element.likes;
    
    const postcommentscomment = document.createElement("p");
    postcommentscomment.setAttribute("class", "post__comments-comment");
    postcommentscomment.innerHTML = element.content;
    
    post.appendChild(postheader);
    post.appendChild(postcontent);
    postheader.appendChild(userdetails);
    userdetails.appendChild(userdetailsimg);
    userdetails.appendChild(userdetailscontent);
    userdetailsimg.appendChild(imagesquareimagesquaresmallisactive);
    userdetailscontent.appendChild(h3);
    userdetailscontent.appendChild(place);
    imagesquareimagesquaresmallisactive.appendChild(img);
    postcontent.appendChild(postimg);
    postcontent.appendChild(postdetails);
    postimg.appendChild(postimgimg);
    postdetails.appendChild(postcomments);
    postcomments.appendChild(p);
    postcomments.appendChild(postcommentscomment);
    
    postcontainer.appendChild(post);
});
