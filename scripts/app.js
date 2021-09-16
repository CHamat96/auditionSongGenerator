const app = {}

  app.init = () => {
    app.displayOptions();
    app.userInput();
  }

  app.filterSongs = [];
  
  app.form = $('form');


  app.userInput = () => {
    app.form.on('submit', (event) => {
      const userRange = $('input[name=range]:checked').val(); //Name of Range
      const userStyle = $('input[name=style]:checked').val(); //Name of Style
      event.preventDefault();
      const rangeSelect = songs[userRange]
      app.filterSongs = rangeSelect.filter((uniqueSong) => {
        return (uniqueSong.style === userStyle)
      })
      const songChoice = app.random(app.filterSongs)
      app.displaySong(songChoice)
    })
  }


  app.displaySong = (song) => {
    const resultHTML = `<h2>${song.name} from <span id="emphasis">${song.show}</span></h2>`
    $('.results').html(resultHTML)
  } 


  app.random = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }

  app.displayOptions = () =>{ 
    range.forEach((rangeOption) => {
    const rangeContainer = `
    <div class="choiceContainer" id="${rangeOption.id}">
            <label for="${rangeOption.id}"></label>
            <input type="radio" id="${rangeOption.id}" name="range" value="${rangeOption.id}">
            <p>${rangeOption.name}</p>
          </div>
    `
    $('.songRange').append(rangeContainer)
    })
    style.forEach((styleOption) => {
      const styleContainer = `
      <div class="choiceContainer" id="${styleOption.id}">
      <label for="${styleOption.id}"></label>
      <input type="radio" name="style" id="${styleOption.id}" value="${styleOption.id}">
      <p>${styleOption.name}</p>
    </div>
      `
      $('.songStyle').append(styleContainer)
    })
}


$(()=> {
  app.init();
})
