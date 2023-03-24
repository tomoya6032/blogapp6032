
import $ from 'jquery'
import axios from 'axios'
import 'trix/dist/trix.css'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()


document.addEventListener('DOMContentLoaded', () => {
    const dataset = document.getElementById('article-show').dataset;
    const articleId = dataset.articleId;
    axios.get(`/articles/${articleId}/like`)
      .then((response) => {
         const hasLiked = response.data.hasLiked
         if (hasLiked) {
           $('.active-heart').removeClass('hidden')
         } else {
           $('.inactive-heart').removeClass('hidden')
         }
      })
 })

const handleHeartDisplay = (hasLiked) => {
    if (hasLiked) {
      $('.active-heart').removeClass('hidden')
    } else {
      $('.inactive-heart').removeClass('hidden')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dataset = document.getElementById('article-show').dataset;
    const articleId = dataset.articleId

    axios.get(`/articles/${articleId}/like`)
      .then((response) => {
         const hasLiked = response.data.hasLiked
         handleHeartDisplay(hasLiked)
    })

    $('.inactive-heart').on('click', () => {
      axios.post(`/articles/${articleId}/like`)
        .then((response) => {
          if (response.data.status === 'ok') {
              $('.active-heart').removeClass('hidden')
              $('.inactive-heart').addClass('hidden')
          }
        })
        .catch((e) => {
          window.alert('Error')
          console.log(e)
        })
    })   

    $('.active-heart').on('click', () => {
        axios.delete(`/articles/${articleId}/like`)
          .then((response) => {
            if (response.data.status === 'ok') {
                $('.active-heart').addClass('hidden')
                $('.inactive-heart').removeClass('hidden')
            }
          })
          .catch((e) => {
            window.alert('Error')
            console.log(e)
          })
      })   

 })

