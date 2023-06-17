
const activities = [
    {
        name: 'Work',
        periods: [
            { label: 'daily', current: '5hrs', previous: '7hrs' },
            { label: 'weekly', current: '32hrs', previous: '36hrs' },
            { label: 'monthly', current: '103hrs', previous: '128hrs' }
        ]
    },
    {
        name: 'Play',
        periods: [
            { label: 'daily', current: '1hr', previous: '2hrs' },
            { label: 'weekly', current: '10hrs', previous: '8hrs' },
            { label: 'monthly', current: '23hrs', previous: '29hrs' }
        ]
    },
    {
        name: 'Study',
        periods: [
            { label: 'daily', current: '0hrs', previous: '1hr' },
            { label: 'weekly', current: '4hrs', previous: '7hrs' },
            { label: 'monthly', current: '13hrs', previous: '19hrs' }
        ]
    },
    {
        name: 'Exercise',
        periods: [
            { label: 'daily', current: '1hr', previous: '1hr' },
            { label: 'weekly', current: '4hrs', previous: '5hrs' },
            { label: 'monthly', current: '11hrs', previous: '18hrs' }
        ]
    },
    {
        name: 'Social',
        periods: [
            { label: 'daily', current: '1hr', previous: '3hrs' },
            { label: 'weekly', current: '5hrs', previous: '10hrs' },
            { label: 'monthly', current: '21hrs', previous: '23hrs' }
        ]
    },
    {
        name: 'Self Care',
        periods: [
            { label: 'daily', current: '0hrs', previous: '1hr' },
            { label: 'weekly', current: '2hrs', previous: '2hrs' },
            { label: 'monthly', current: '7hrs', previous: '11hrs' }
        ]
    }
];


function setPeriod(periodLabel) {
    const currentPeriodElements = document.getElementsByClassName('current-period');
    const previousPeriodElements = document.getElementsByClassName('previous-period');

    for (let i = 0; i < currentPeriodElements.length; i++) {
        const period = activities[i].periods.find(period => period.label === periodLabel);
        console.log(period);
        currentPeriodElements[i].textContent = `${period.current}`;
        previousPeriodElements[i].textContent = `Previous - ${period.previous}`;
    }

    const buttons = document.querySelectorAll('.periods button');
    buttons.forEach(button => {
      const buttonPeriod = button.getAttribute('data-period');
      if (buttonPeriod === periodLabel) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

}

setPeriod('daily');



