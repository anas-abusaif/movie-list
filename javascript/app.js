'use strict'
let form = document.getElementById('form');
let table = document.getElementById('table');
let genre = document.getElementById('genre');
let movieName = document.getElementById('movieName');
let Release = document.getElementById('Release');
let save = document.getElementById('save');
let preMovies=JSON.parse(localStorage.getItem('preMovies'));

function AddMovie(name, image, release) {
  this.name = name;
  this.image = image;
  this.release = release;
  AddMovie.all.push(this);
}
AddMovie.all=[];
AddMovie.prototype.addToTable = function () {
  let row = document.createElement('tr');
  table.appendChild(row);
  let x = document.createElement('td');
  x.innerHTML = 'X';
  row.appendChild(x);

  let img = document.createElement('td');
  img.innerHTML = `<img src="${this.image}" alt="">`;
  row.appendChild(img);

  let movieNamecell = document.createElement('td');
  movieNamecell.innerHTML = this.name;
  row.appendChild(movieNamecell);

  let date = document.createElement('td');
  date.innerHTML = this.release;
  row.appendChild(date);
}

function display(event) {
  event.preventDefault();
  if(preMovies){
    for(let i=0;i<preMovies.length;i++){
      let newMovie = new AddMovie(preMovies[i].name, preMovies[i].genre, preMovies[i].release);
      newMovie.addToTable();
    }
  }
  let newMovie = new AddMovie(movieName.value, genre.value, Release.value);
  newMovie.addToTable();
  form.reset();
  localStorage.setItem('preMovies',JSON.stringify(AddMovie.all));
}
save.addEventListener('click', display);