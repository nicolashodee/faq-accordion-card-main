# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). 

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](/design/desktop-preview.jpg)

### Links

- Solution URL: [Github repositiory](https://github.com/nicolashodee/faq-accordion-card-main)
- Live Site URL: [Github pages](https://nicolashodee.github.io/faq-accordion-card-main/)

## My process

- Building the HTML content
- Styling the content with CSS 
- Using Javascript to toggle classes so the design can change when you click the accordion. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Here some CSS when I finally understood that a the absolute position works only if the parent block position is set to relative, or fixed. This was very useful for positioning #image1 relatively to .card_images. 

```css
.card_images {
  position: relative;
  z-index: 1; 
}

/* image 1 lies within a div with class .card_images */
#image1 {
  position: absolute; 
  height: 30px;
  z-index: 2;
  
}
```

some Javascript, which I took on the web for the accordion, but I still need to work to fully understand it. And it's not working for now... at least not yet!

```js
console.log("JS loaded")
const questions = document.querySelectorAll(".question"); 

questions.forEach(question => {
  question.addEventListener("click", () => {
    let answer = question.nextElementSibling; 
    let questionIcon = questionIcon.nextElementSibling;  

    answer.classList.toggle("active");
    questionIcon.classList.toggle("active"); 
  }); 
}); 
```

### Continued development

At the moment, the accordion doesn't unfold, and I need to find the reason why. 
JS is loading, CSS is ready for the different states, but I can't manage to record any "click" using JS. Probably an error somewhere... 

### Useful resources

- [CSS/JS accordion tutorial](https://www.youtube.com/watch?v=UXR5LzjND5I&t=571s) - This helped me for understanding how an accordion works. 
- [Learn positioning in 9 minutes](https://www.youtube.com/watch?v=jx5jmI0UlXU) - This is an amazing video which finally helped me understanding how positioning works. A hidden gem! 

## Author

- Website - [nicolashodee.com](https://www.nicolashodee.com)
- Frontend Mentor - [@nicolashodee](https://www.frontendmentor.io/profile/nicolashodee)


## Acknowledgments

No one here, yet!


