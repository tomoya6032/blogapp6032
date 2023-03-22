// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

require("trix")
require("@rails/actiontext")

import $ from 'jquery'
import axios from 'axios'
import 'trix/dist/trix.css'
import { response } from '../../../.yarn/releases/yarn-1.22.10.cjs'




// document.addEventListener('turbolinks:load', () => {
//     const dataset = document.getElementById('article-show').dataset;
//     const articleId = dataset.articleId;
//     axios.get(`/articles/${articleId}/like`)
//       .then((response) => {
//          const hasLiked = response.data.hasLiked
//          if (hasLiked) {
//            $('.active-heart').removeClass('hidden')
//          } else {
//            $('.inactive-heart').removeClass('hidden')
//          }
//       })
//  })

const handleHeartDisplay = (hasLiked) => {
    if (hasLiked) {
      $('.active-heart').removeClass('hidden')
    } else {
      $('.inactive-heart').removeClass('hidden')
    }
}

document.addEventListener('turbolinks:load', () => {
    const dataset = document.getElementById('article-show').dataset;
    const articleId = dataset.articleId;

    axios.get(`/articles/${articleId}/like`)
      .then((response) => {
         const hasLiked = response.data.hasLiked
         handleHeartDisplay(hasLiked)
      })

    $('.inactive-heart').on('click', () => {
      axios.post(`/articles/${articleId}/like`)
        .then((response) => {
          console.log(response)
        })
        .catch((e) => {
          window.alert('Error')
          console.log(e)
        })
    })   
 })

