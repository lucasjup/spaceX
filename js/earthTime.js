var timeTravel = false;
var speedTime = 0;

// changes appearance of elements based on the time
function earthTime() {
	var today = new Date();
	var seconds = today.getSeconds();
	var minutes = today.getMinutes();
	var hour = today.getHours();

  //to start time travel at the correct time
  speedTime = hour;

  // changes appearance of elements based on the time
  if (hour >= 6 && hour < 7) {
    // Sun rise
    document.getElementById('earth').className = 'timeSunRise';
    document.getElementById('earthNight').className = 'earthHide';
    document.getElementById('earthSunLow').className = 'earthShow';
  } else if (hour >= 7 && hour < 12) {
    // Morning
    document.getElementById('earth').className = 'timeMorning';
    document.getElementById('earthSunLow').className = 'earthHide';
    document.getElementById('earthWarm').className = 'earthShow';
  } else if (hour >= 12 && hour < 18) {
    // Day
    document.getElementById('earth').className = 'timeDay';
    document.getElementById('earthWarm').className = 'earthHide';
    document.getElementById('earthDay').className = 'earthShow';
  } else if (hour >= 18 && hour < 21) {
    // Evening
    document.getElementById('earth').className = 'timeEvening';
    document.getElementById('earthDay').className = 'earthHide';
    document.getElementById('earthWarm').className = 'earthShow';
  } else if (hour >= 21 && hour < 22) {
    // Sun set
    document.getElementById('earth').className = 'timeSunDown';
    document.getElementById('earthWarm').className = 'earthHide';
    document.getElementById('earthSunLow').className = 'earthShow';
  } else {
    // Night
    document.getElementById('earth').className = 'timeNight';
    document.getElementById('earthSunLow').className = 'earthHide';
    document.getElementById('earthNight').className = 'earthShow';
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

// simulation of time passing by
function earthTimeSpeed() {
  if (speedTime == 24) {
    speedTime = 0;
  } else if ((speedTime >= 5 && speedTime < 8) || (speedTime >= 18 && speedTime < 23)) {
    speedTime = speedTime + 0.25;
  } else {
    speedTime ++;
  };

  console.log(speedTime);

  // changes appearance of elements based on the simulated time
  if (speedTime >= 6 && speedTime < 7) {
    // Sun rise
    document.getElementById('earth').className = 'timeSunRise';
    document.getElementById('earthNight').className = 'earthHide';
    document.getElementById('earthSunLow').className = 'earthShow';
  } else if (speedTime >= 7 && speedTime < 12) {
    // Morning
    document.getElementById('earth').className = 'timeMorning';
    document.getElementById('earthSunLow').className = 'earthHide';
    document.getElementById('earthWarm').className = 'earthShow';
  } else if (speedTime >= 12 && speedTime < 18) {
    // Afternoon
    document.getElementById('earth').className = 'timeDay';
    document.getElementById('earthWarm').className = 'earthHide';
    document.getElementById('earthDay').className = 'earthShow';
  } else if (speedTime >= 18 && speedTime < 21) {
    // Evening
    document.getElementById('earth').className = 'timeEvening';
    document.getElementById('earthDay').className = 'earthHide';
    document.getElementById('earthWarm').className = 'earthShow';
  } else if (speedTime >= 21 && speedTime < 22) {
    // Sun set
    document.getElementById('earth').className = 'timeSunDown';
    document.getElementById('earthWarm').className = 'earthHide';
    document.getElementById('earthSunLow').className = 'earthShow';
  } else {
    // Night
    document.getElementById('earth').className = 'timeNight';
    document.getElementById('earthSunLow').className = 'earthHide';
    document.getElementById('earthNight').className = 'earthShow';
  }
}

function toggleTimeTravel() {
  if (timeTravel == false) {
    timeTravel = true;
    document.getElementById('timeTravel').innerHTML = "<p> Real time day and night cycle </p>"
  	document.getElementById('earthTime').innerHTML = "";
    document.getElementById('earthDate').innerHTML = "";
  } else {
    timeTravel = false;
    earthDate();
    document.getElementById('timeTravel').innerHTML = "<p> Watch the day and night cycle </p>"
  }
}

function animationTime() {
  if (timeTravel == true) {
    earthTimeSpeed();
  } else {
    earthTime();
  }
}

function earthDate() {
  if (timeTravel == false) {
    var today = new Date();
    var months = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
    document.getElementById('earthDate').innerHTML = today.getDate() + ' ' + months[today.getMonth()];
  }
}

document.onload = animationTime();
document.onload = earthDate();

setInterval(animationTime, 1000);
setInterval(earthDate, 60000);
