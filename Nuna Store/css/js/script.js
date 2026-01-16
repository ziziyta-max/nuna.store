$(document).ready(function () {

  // ADD TO CART
  $(".add-cart").click(function () {
    let name = $(this).data("name");
    alert(name + " ditambahkan ke keranjang!");
  });

  // FILTER PRODUK
  $(".filter-btn").click(function () {
    let filter = $(this).data("filter");

    if (filter === "all") {
      $(".product").show();
    } else {
      $(".product").hide();
      $("." + filter).show();
    }
  });

  // CONTACT FORM
  $("#contactForm").submit(function(e){
    e.preventDefault();
    alert("Pesan berhasil dikirim! Terima kasih 💖");
    this.reset();
  });

  // DARK MODE
  $("#darkToggle").click(function () {
    $("body").toggleClass("dark");
  });

});
