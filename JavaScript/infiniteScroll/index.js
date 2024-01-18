console.log("script Loaded");
let item = 0;
let isLoading = false;
history.scrollRestoration = "manual";
let colors = [
  "red",
  "green",
  "yellow",
  "aqua",
  "pink",
  "blue",
  "violet",
  "indigo",
  "grey",
  "orange",
];
let set = [
  "https://images.pexels.com/photos/16953244/pexels-photo-16953244/free-photo-of-hand-holding-kitten.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/14661923/pexels-photo-14661923.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/4035271/pexels-photo-4035271.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/1781947/pexels-photo-1781947.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/3633950/pexels-photo-3633950.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2728252/pexels-photo-2728252.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3492589/pexels-photo-3492589.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/119777/pexels-photo-119777.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.unsplash.com/photo-1622782262245-bfb660f4ff93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1560942485-b2a11cc13456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNzc2NTUzOXx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1686695325715-3bb6985a6d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1665256452834-20c2d868cd01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8YkRvNDhjVWh3bll8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1686616004011-29e44e1da346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1686518528774-31014e028eb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
  "https://cdn.shopify.com/s/files/1/0151/0741/products/PG159_3_75fc1279-996b-4f8d-a1b7-3dfa0e32277a_480x480.jpg?v=1578633900",
];

function post() {
  for (let i = 0; i < set.length; i++) {
    let ele = document.createElement("img");
    ele.src = set[i];
    ele.style.backgroundColor = colors[i];
    ele.setAttribute("id", item);
    ele.setAttribute("class", "post");
    item++;
    document.getElementById("scroll-pan").appendChild(ele);
  }
}
post();

function loadMorePosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      post();
      document.getElementById("loading-symbol").style.display = "none";
      isLoading = false;
      resolve(0);
    }, 1000);
  });
}
async function getPosts() {
  await loadMorePosts();
}

document.addEventListener("scroll", (e) => {
  console.log("scroll event called", e);
  console.log("scrollHeight", document.documentElement.scrollHeight);
  console.log("clientHeight", document.documentElement.clientHeight);
  console.log("scrollTop", document.documentElement.scrollTop);
  if (
    document.documentElement.scrollHeight - 300 <=
    document.documentElement.clientHeight + document.documentElement.scrollTop
  ) {
    if (!isLoading) {
      isLoading = true;
      document.getElementById("loading-symbol").style.display = "block";
      getPosts();
    }
  }
});
