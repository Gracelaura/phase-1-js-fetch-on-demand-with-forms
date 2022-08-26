const init = () => {
  const inputForm = document.querrySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querrySelector("input#searchById")

    console.log(input.value)

    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data =>  {
        const title = document.querrySelector("section#movieDetails h4")
        const summary = document.querrySelector("section#movieDetails p")

        title.innerText = data.title
        summary.innerText = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init);