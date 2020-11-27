const findNextDate = (dt) => {
  let currDate = new Date();
  let todaysDate = new Date();
  if (dt) {
    currDate = new Date(dt);
    if (isNaN(currDate)) {
      return 'Please enter valid date & time';
    }
    if (currDate.getTime() < todaysDate.getTime()) {
      return currDate + ': Please enter current or future dates';
    }
  }

  let timeCheck = currDate.getHours();
  let drawDates = [3, 6]; //for Lottery draw dates: Wednesday and Saturday

  //Time after 8pm or 20:00 hrs is treated as next day

  if (timeCheck < 19 && drawDates.includes(currDate.getDay())) {
    let nextDate = new Date();
    nextDate =
      currDate.getDate() +
      '/' +
      (currDate.getMonth() + 1) +
      '/' +
      currDate.getFullYear();

    return 'Next Lottery Draw: ' + nextDate + ' At 8 pm';
  } else {
    let nextDate = new Date();
    let nextWed = new Date(nextLottery(currDate, 3));
    let nextSat = new Date(nextLottery(currDate, 6));
    if (nextWed.getTime() < nextSat.getTime()) {
      nextDate =
        nextWed.getDate() +
        '/' +
        (nextWed.getMonth() + 1) +
        '/' +
        nextWed.getFullYear();
      return 'Next Lottery Draw: ' + nextDate + ' Wednesday At 8pm';
    } else {
      nextDate =
        nextSat.getDate() +
        '/' +
        (nextSat.getMonth() + 1) +
        '/' +
        nextSat.getFullYear();

      return 'Next Lottery Draw: ' + nextDate + ' Saturday At 8pm';
    }
  }
};

//function checking the next valid lottery draw date

function nextLottery(currDate, day) {
  let diff = day - currDate.getDay();
  var nexDate = new Date(currDate);
  if (diff <= 0) {
    diff += 7;
    return nexDate.setDate(currDate.getDate() + diff);
  } else {
    return nexDate.setDate(currDate.getDate() + diff);
  }
}

console.log(findNextDate());
