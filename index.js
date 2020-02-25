document.addEventListener('DOMContentLoaded', function() {
  //Selectors
  var form = document.querySelector('form');
  var inputVals = document.getElementsByClassName('url-input');
  var article = document.querySelector('article');
  var container = document.querySelector('.container');
  var meme = document.querySelectorAll('.meme-div');
  console.log(meme);

  function clearInputs() {
    for (var i = 0; i < inputVals.length; i++) {
      inputVals[i].value = '';
    }
  }

  //Add Meme
  form.addEventListener('submit', e => {
    e.preventDefault();
    var urlInput = inputVals[0].value;
    var topInput = inputVals[1].value;
    var bottomInput = inputVals[2].value;
    // console.log(urlInput, topInput, bottomInput);

    var newDiv = document.createElement('div');
    newDiv.className = 'meme-div';

    var memeImage = document.createElement('img');
    memeImage.classList.add('image');
    memeImage.src = urlInput;

    // newDiv.style.backgroundImage = `url(${urlInput})`;

    var topText = document.createElement('div');
    topText.classList.add('topText');
    topText.innerText = topInput;
    newDiv.append(topText);

    newDiv.appendChild(memeImage);

    var bottomText = document.createElement('div');
    bottomText.classList.add('bottomText');
    bottomText.innerText = bottomInput;
    newDiv.append(bottomText);

    var xDiv = document.createElement('div');
    var xText = document.createElement('p');
    xText.classList.add('x-p');
    xText.innerText = 'X';

    xDiv.classList.add('xDiv');
    xDiv.append(xText);
    newDiv.append(xDiv);

    article.appendChild(newDiv);

    clearInputs();
  });

  //Hover Meme
  // article.addEventListener('mouseover', e => {
  //   var clickedEl = e.target.className;
  //   console.log(clickedEl);

  //   var hoverX = document.createElement('p');
  //   hoverX.innerText = 'x';
  //   hoverX.className = 'hoverX';

  //   if (clickedEl === 'topText' || clickedEl === 'bottomText') {
  //     e.target.parentNode.append(hoverX);
  //   } else if (clickedEl === 'meme-div') {
  //     clickedEl.appendChild(hoverX);
  //   }
  // });

  // article.addEventListener('mouseleave', e => {
  //   var clickedEl = e.target.className;
  //   console.log(clickedEl);

  //   var hoverX = document.createElement('p');
  //   hoverX.innerText = 'x';
  //   hoverX.className = 'hoverX';

  //   if (clickedEl === 'topText' || clickedEl === 'bottomText') {
  //     e.target.parentNode.removeChild(hoverX);
  //   } else if (clickedEl === 'meme-div') {
  //     clickedEl.removeChild(hoverX);
  //   }
  // });

  //Delete
  article.addEventListener('click', e => {
    var clickedEl = e.target.className;
    console.log(clickedEl);
    if (
      // clickedEl === 'hoverX' ||
      clickedEl === 'topText' ||
      clickedEl === 'bottomText'
    ) {
      article.removeChild(e.target.parentNode);
    } else if (clickedEl === 'meme-div') {
      article.removeChild(e.target);
    }
  });
});
