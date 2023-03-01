//Categories
{
  var categories = [
    {
      name : "Top Offers",
      url : "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    },
    {
      name: "Toys",
      url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    },
    
    {
      name: "Mobiles",
      url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    },
    {
      name: "Fashion",
      url: "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
      srcset: "",
    },
    {
      name: "Electronics",
      url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      srcset: "",
    },
    {
      name: "Appliances",
      url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      srcset: "",
    },
    {
      name: "Travel",
      url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
      srcset: "",
    },
    {
      name: "Top Offers",
      url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      srcset: "",
    },
    {
      name: "Beauty, Toys & More",
      url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
      srcset: "",
    },
    {
      name: "Two Wheelers",
      url: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
      srcset: "",
    },
  ];

  var cateContent = "";

  categories.forEach((element) => {
    cateContent += `
            <div class = "category-item">
                <div class = "d-flax justify-content-center">
                    <img class = "img-fluid"
                    src = "${element.url}" alt = "Not found" width="64" />
                </div>
                <p class = "text-center">${element.name}</p>
            </div>
        `;
  });

  document.getElementById("categories").innerHTML = cateContent;
}


{
  let swiper = new Swiper('.mySwiper', {
      // loop: true,
      slidesPerView: 'auto',
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
}
