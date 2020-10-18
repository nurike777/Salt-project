const scrollDown = document.getElementById('linkDown');
const work = document.getElementById('work');

if (scrollDown){
  scrollDown.addEventListener('click', (event) => {
    event.preventDefault();
    work.scrollIntoView({
      block: "start",
      behavior: "smooth"
    })
  })
};
