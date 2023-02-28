//Categories
{
  var categories = [
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

//Products viewer
{
  var products = [
    {
      name: "Top Mirrorless Cameras",
      url: "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
      srcset:
        "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 768w",
      starting_price: "1",
      brand: "Canon, Sony, Fujifilm...",
    },
    {
      name: "Printers",
      url: "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
      srcset:
        "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70 768w",
      starting_price: "1",
      brand: "HP",
    },
    {
      name: "Earbuds",
      url : "https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/4/z/b/-original-imagmucmeyd5cdpy.jpeg?q=70",
      srcset : "https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/4/z/b/-original-imagmucmeyd5cdpy.jpeg?q=70",
      starting_price: "1",
      brand: "Earbuds",
    },
    {
      name: "Earbuds",
      url : "https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/4/z/b/-original-imagmucmeyd5cdpy.jpeg?q=70",
      srcset : "https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/4/z/b/-original-imagmucmeyd5cdpy.jpeg?q=70",
      starting_price: "1",
      brand: "Earbuds",
    },
    {
      name: "Monitors",
      url: "https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
      srcset:
        "https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70 768w",
      starting_price: "1",
      brand: "SAMSUNG",
    },
    {
      name: "Premium PowerBanks",
      url: "https://rukminim1.flixcart.com/image/200/200/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70",
      srcset:
        "https://rukminim1.flixcart.com/image/200/200/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70 768w",
      starting_price: "1",
      brand: "Mi, realme & more",
    },
    {
      name: "T-shirts",
      srcset:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/kids-t-shirt/e/y/h/7-8-years-red-boy-white-free-fire-tees-original-imagg6mztgxygght.jpeg?q=70",
      starting_price: "1",
      brand: "zara",
    },
    {
      name: "Monitors",
      url: "https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
      srcset:
        "https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70 768w",
      starting_price: "1",
      brand: "LENOVO",
    },
  ];

  var electronics = "";
  products.forEach((element) => {
    electronics += `
        <div class="swiper-slide product-card">
            <div class="product-image">
                <img class="img-fluid" src="${element.url}" srcset="${element.srcset}" alt="" width="auto" height="200px" sizes="(max-width: 768px) 720px, 1024px">
            </div>
            <p class="product-title mt-md-4 mt-sm-2 mb-0">${element.name}</p>
            <p class="product-price mt-2 mb-0">From &#x20B9;${element.starting_price}</p>
            <p class="product-brand mt-2 mb-0">${element.brand}</p>
         </div>
        `;
  });

  document.getElementById("electronic-products").innerHTML += electronics;
  document.getElementById("summer-products").innerHTML += electronics;
  document.getElementById("sport-products").innerHTML += electronics;
    
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