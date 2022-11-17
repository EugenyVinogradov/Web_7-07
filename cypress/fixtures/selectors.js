const selectors = {
  "daysToolbar": ".page-nav__day",
  "moviesTitle": ".movie__title",
  "login": ".login__input[type='email']",
  "password": ".login__input[type='password']",
  "authButton": "[type='submit']",
  "nextDay": ".page-nav__day:nth-child(2)",
  "firstHall": "//*[@id='hall-control']/div/ul/li[1]/text()",
  "hallsInTheater": ".movie-seances__hall-title",
  "seance": ".movie-seances__list",
  "seanceTime": ".movie-seances__time-block",
  "seatsPart1": "div.buying-scheme__wrapper > div:nth-child(",
  "seatsPart2": ") > span:nth-child(",
  "seatsPart3": ")",
  "bookingButton": ".acceptin-button",
  "bookingTitle": "h2.ticket__check-title",
  "bookingSeatsAndRows": ".ticket__info:nth-child(2)",
  "bookingHall": ".ticket__info:nth-child(3)"

}

exports.selectors = selectors;