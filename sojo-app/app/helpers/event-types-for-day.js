import Ember from 'ember';

export function eventTypesForDay(params/*, hash*/) {
  let datesArray = params[0].toArray();
  let date = params[1];
  let matchedDatesArray = [];
  for (var i = 0; i < datesArray.length; i++) {
    console.log(datesArray[i].get('id'));
    if (datesArray[i].get('date').toDateString() === date.toDateString() &&
      datesArray[i].get('type') == 'event') {
      matchedDatesArray.push(params[0].objectAt(i))
    }
  }
  return matchedDatesArray;
}

export default Ember.Helper.helper(eventTypesForDay);
