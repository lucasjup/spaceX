var today = new Date();

function earthTime() {
	var today = new Date();
	var seconds = today.getSeconds();
	var minutes = today.getMinutes();
	var hour = today.getHours();

  // changes colors of elements based on the time
  if (hour == 6) {
    // Sun rise
    document.getElementById('earth').className = 'timeSunLow';
    document.getElementById('earthImg').className = 'earthSunLow';
  } else if (hour >= 7 && hour <= 11) {
    // Morning
    document.getElementById('earth').className = 'timeMorning';
    document.getElementById('earthImg').className = 'earthWarm';
  } else if (hour >= 12 && hour <= 17) {
    // Afternoon
    document.getElementById('earth').className = 'timeDay';
    document.getElementById('earthImg').className = 'earthDay';
  } else if (hour >= 18 && hour <= 21) {
    // Evening
    document.getElementById('earth').className = 'timeEvening';
    document.getElementById('earthImg').className = 'earthWarm';
  } else if (hour == 22) {
    // Sun set
    document.getElementById('earth').className = 'timeSunLow';
    document.getElementById('earthImg').className = 'earthSunLow';
  } else if (hour == 24 || hour <= 4) {
    // Midnight
    document.getElementById('earth').className = 'timeStars';
    document.getElementById('earthImg').className = 'earthNight';
  } else {
    // Night
    document.getElementById('earth').className = 'timeNight';
    document.getElementById('earthImg').className = 'earthNight';
  }

  // animates the clock every 10 seconds
	if (seconds % 10 == 0) {
		document.getElementById('earthTime').classList.add('animate');
	} else if (seconds % 10 >= 5) {
		document.getElementById('earthTime').classList.remove('animate');
	}

  // Adds zero before 1 digit times
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (hour < 10) {
		hour = '0' + hour;
	}

  // Add time to html
	document.getElementById('earthTime').innerHTML = hour + ':' + minutes + ':' + seconds;
}

function earthDate() {
  var months = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
  document.getElementById('earthDate').innerHTML = today.getDate() + ' ' + months[today.getMonth()];
}

earthDate();
earthTime();
setInterval(earthTime, 1000);
setInterval(earthDate, 3600000);
