$(document).ready(function () {
  let searchTimer;

  function loadProducts(searchText) {
    $("#loading").prop("hidden", false);
    $("#results").empty();

    $.ajax({
      url: "http://localhost:3001/products",
      method: "GET",
      data: { q: searchText },
      dataType: "json"
    })
    .done(function (products) {
      $("#loading").prop("hidden", true);

      if (products.length === 0) {
        $("#results").html('<p class="info">No products found</p>');
        return;
      }

      products.forEach(function (product) {
        const card = $("<article>").addClass("product-card");
        $("<img>").attr("src", product.image).attr("alt", product.name).appendTo(card);
        $("<h3>").text(product.name).appendTo(card);
        $("<p>").text("₹" + product.price).appendTo(card);
        $("#results").append(card);
      });
    })
    .fail(function () {
      $("#loading").prop("hidden", true);
      $("#results").html('<p class="error">Could not load products. Is JSON Server running on port 3001?</p>');
    });
  }

  $("#searchInput").on("input", function () {
    clearTimeout(searchTimer);
    const searchText = $(this).val().trim();
    searchTimer = setTimeout(function () {
      loadProducts(searchText);
    }, 250);
  });

  loadProducts("");
});