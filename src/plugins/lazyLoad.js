export default {
    install (app) {
      app.config.globalProperties.$lazyLoad = element => {
        element.classList.add('lazy-load-element')
        const intersect = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
  
            element.classList.add('lazy-loaded')
          })
        })
        intersect.observe(element)
      }
    }
  }
