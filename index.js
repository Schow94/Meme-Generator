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
    newDiv.style.width = '600px';
    newDiv.style.minHeight = '400px';
    newDiv.className = 'meme-div';

    newDiv.style.backgroundImage = `url(${urlInput})`;
    newDiv.style.backgroundSize = '100%';
    newDiv.style.backgroundRepeat = 'no-repeat';

    var topText = document.createElement('p');
    topText.innerText = topInput;
    topText.className = 'topText';
    newDiv.append(topText);

    var bottomText = document.createElement('p');
    bottomText.innerText = bottomInput;
    bottomText.className = 'bottomText';
    newDiv.append(bottomText);

    article.appendChild(newDiv);

    clearInputs();
  });

  //Hover Meme
  article.addEventListener('mouseover', e => {
    var clickedEl = e.target.className;
    console.log(clickedEl);

    var hoverX = document.createElement('p');
    hoverX.innerText = 'x';
    hoverX.className = 'hoverX';

    if (clickedEl === 'topText' || clickedEl === 'bottomText') {
      e.target.parentNode.append(hoverX);
    } else if (clickedEl === 'meme-div') {
      clickedEl.appendChild(hoverX);
    }
  });

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
