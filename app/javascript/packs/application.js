require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { initMapbox } from '../plugins/init_mapbox';

document.addEventListener('turbolinks:load', () => {
  initMapbox();
  const messageChatroom = document.getElementById("message_content");
  if (messageChatroom) {
    messageChatroom.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          document.getElementById('new_message').submit();
        }
    });
  }
})
