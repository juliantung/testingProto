document.addEventListener('DOMContentLoaded', () => {
  const starInputs = document.querySelectorAll('input[name="stars"]');

  starInputs.forEach(star => {
    star.addEventListener('change', (event) => {
      const selectedStar = event.target.id;
      if (selectedStar === 'st1' || selectedStar === 'st2' || selectedStar === 'st3') {
        window.location.href = 'feedback.html';
      } else if (selectedStar === 'st4' || selectedStar === 'st5') {
        window.location.href = 'https://kyson.sg';
      }
    });
  });
});
