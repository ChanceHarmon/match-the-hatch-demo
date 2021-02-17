'use strict';


function handleFishClick() {
  console.log('first worked')
  $('#fish-flash').hide()
  $('#first-slide').toggle();
}
function handleSecondSlide() {
  console.log('clicked')
  $('#first-slide').hide()
  $('#second-slide').toggle();
}
function handleThirdSlide() {
  console.log('clicked')
  $('#second-slide').hide()
  $('#third-slide').toggle();
}
function handleFourthSlide() {
  console.log('clicked')
  $('#third-slide').hide()
  $('#fourth-slide').toggle();
}
function handleFifthSlide() {
  console.log('clicked')
  $('#fourth-slide').hide()
  $('#fifth-slide').toggle();
}
function handleLastSlide() {
  console.log('clicked')
  $('#fifth-slide').hide()
  $('#last-slide').toggle();
}

$('#fish-flash').on('click', handleFishClick)
$('#first-slide-btn').on('click', handleSecondSlide)
$('#second-slide-btn').on('click', handleThirdSlide)
$('#third-slide-btn').on('click', handleFourthSlide)
$('#fourth-slide-btn').on('click', handleFifthSlide)
$('#fifth-slide-btn').on('click', handleLastSlide)