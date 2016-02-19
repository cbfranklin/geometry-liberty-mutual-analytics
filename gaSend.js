var myCategory, myAction, myLabel;

ga('send', 'event', myCategory, myAction, myLabel);

// OR

ga('send', {
    hitType: 'event',
    eventCategory: 'Videos',
    eventAction: 'play',
    eventLabel: 'Fall Campaign'
});