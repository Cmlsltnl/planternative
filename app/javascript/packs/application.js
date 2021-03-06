require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("trix")
require("@rails/actiontext")

import "bootstrap";
import { initMapbox } from '../plugins/init_mapbox';
import { smoothScroll } from '../plugins/init_scroll';
import { initAutocomplete } from '../plugins/init_autocomplete';
import { initStarRating } from '../plugins/init_star_rating';

document.addEventListener('turbolinks:load', () => {
  const collapsible = document.querySelectorAll(".collapsible");
  smoothScroll();
  initMapbox();
  initAutocomplete();
  const messageChatroom = document.getElementById("submit-message");
  initStarRating();
  if (messageChatroom) {
    messageChatroom.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById('new_message').submit();
      }
    });
  }
  collapsible.forEach(event => {
    event.addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  })
}); // End Turbolink
