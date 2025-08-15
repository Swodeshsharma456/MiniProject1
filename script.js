document.getElementById('loadDataBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:3000/api/reviews');
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    displayReviews(data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    document.getElementById('apiData').innerHTML = '<p>Could not load data. Please try again later.</p>';
  }
});

function displayReviews(reviews) {
  const container = document.getElementById('apiData');
  container.innerHTML = '';

  reviews.forEach((review) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${review.name}</h3>
      <p>"${review.message}"</p>
      <p><strong>Rating:</strong> ${review.rating}/5</p>
    `;
    container.appendChild(card);
  });
}