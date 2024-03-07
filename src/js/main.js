import $ from "jquery";

$(function () {
  $(".header__burger-wrapper").on("click", function (e) {
    $(".menu").toggleClass("active");
  });
  $(".menu__overlay").on("click", function (e) {
    $(".menu").toggleClass("active");
  });

  let posts = [
    {
      title: "I`m render by Jquery 1",
      content: "Content 1",
      img: "https://images.unsplash.com/photo-1709642717827-9621f2a978a1?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "I`m render by Jquery 2",
      content: "Content 2",
      img: "https://images.unsplash.com/photo-1709403338214-8bf2ed1697f5?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "I`m render by Jquery 3",
      content: "Content 3",
      img: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "I`m render by Jquery 4",
      content: "Content 4",
      img: "https://plus.unsplash.com/premium_photo-1704477658142-d0af9445b7e4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  $.each(posts, function (index, post) {
    let postHtml = `<li class="benefits__item">
                <img
                  class="benefits__img"
                  src="${post.img}"
                  alt="girl runnnig"
                />
                <h4 class="benefits__item-label"> ${post.title}</h4>
                <p class="benefits__item-text">
                  ${post.content}
                </p>
                <button class="benefits__item-btn btn">SEE MORE</button>
              </li>`;
    $(".benefits__list").append(postHtml);
  });
});
