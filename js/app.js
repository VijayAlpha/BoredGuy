const apiBtn = document.querySelector("#btn-getApi");
const activityBox = document.querySelector('.activity');

apiBtn.addEventListener('click', ()=>{
    activityBox.innerHTML = "<p> Wait I'm Thinking.... <br> Hmm... &#129300; </p>";

    fetch('https://www.boredapi.com/api/activity')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    activityBox.innerHTML = `<p>${data.activity} &#128515</p>`;
  });
})