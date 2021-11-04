# Resize Bug with swiper and vue

To reproduce:

-   `npm install`
-   `vite --host`
-   open localhost:3000 in browser
-   swipe to slide 3 or 4
-   resize the browser window
-   the the left style attribute of some slides begin to have the wrong old value, becuase the slide is rerendered with stale data from virtualData.offset
-   this can be seen as slides only half visible or no slide visible at all
-   it is easier to see this happen on an iPhone when changing orientation
