const shifty = require('shifty')
const  tween = shifty.tween

// tween({
//   from: { x: 0, y: 50 },
//   to: { x: 10, y: -30 },
//   duration: 1500,
//   easing: 'easeOutQuad',
//   step: state => console.log(state)
// }).then(
//   () => console.log('All done!')
// );

tween({
    from: { x: 0, y: 50 },
    to: { x: 10, y: -30 },
    duration: 1500,
    easing: 'easeOutQuad',
    // step: state => console.log(state)
  }).then(
      (state) => console.log(state) // { x: 10, y: -30 }
  );