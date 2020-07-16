$(document).ready(function() {

  function playSound(key) {
    const letter = key.toUpperCase();
    let name = ''
    switch (letter) {
      case 'Q':
        name = 'Cat';
        break;
      case 'W':
        name = "Chicken";
        break;
      case 'E':
        name = "Cow";
        break;
      case 'A':
        name = "Ghast";
        break;
      case 'S':
        name = "Creeper";
        break;
      case 'D':
        name = "Pig";
        break;
      case 'Z':
        name = "Sheep";
        break;
      case 'X':
        name = "Villager";
        break;
      case 'C':
        name = "Zombie";
        break;
      default:
        return;
    }

    const soundClip = document.getElementById(letter);
    const soundName = '<p class="col s6">' + name + '</p>';
    $('#display').html('<p class="col s6">Sound:</p>' + soundName);
    soundClip.play();
  }

  $(document).keypress(function(event) {
    playSound(event.key)
  });

  $('.drum-pad').click(function(event) {
    const firstChild = $(event.target).children()[0];
    const key = $(firstChild).attr('id');
    playSound(key);
  });
});


