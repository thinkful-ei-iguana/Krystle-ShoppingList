'use strict';
$(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let itemName = document.getElementById('shopping-list-entry').value;
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
  });
  $("ul").on("click", ".shopping-item-delete", function() {
    event.preventDefault();
  $(event.target).closest("li").remove();
});

    $("ul").on("click", ".shopping-item-toggle", function() {
    $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
});

});