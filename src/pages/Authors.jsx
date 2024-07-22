import React from 'react';
import './Authors.css';

function Authors() {
  return (
    <div className="authors-page">
      <h1>Meet Our Authors</h1>
      <p id='firstp'>Discover the brilliant minds behind our vast collection of books. Each author brings their unique voice and perspective, enriching our library with a diverse range of genres and stories.</p>
      
      <h2>Author Spotlight</h2>
      <div className="author-spotlight">
        <img src="data:image/jpeg;base64,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" alt="Author Name" />
        <div>
          <h3>MT VASUDEVAN NAIR</h3>
          <p>M.T. Vasudevan Nair is a celebrated Indian author, screenwriter, and film director known for his contributions to Malayalam literature and cinema.</p>
        </div>
      </div>
      
      <h2>Featured Authors</h2>
      <ul className="featured-authors">
        <li>
          <img src="data:image/jpeg;base64,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" alt="Author Name" />
          <h3>SUBHASH CHANDRAN</h3>
          <p>Subhash Chandran is an acclaimed Indian writer and novelist, renowned for his works in Malayalam literature, including the award-winning novel "Manushyanu Oru Aamukham."</p>
        </li>
        <li>
          <img src="data:image/webp;base64,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" alt="Author Name" />
          <h3>ONV KURUPP</h3>
          <p>O.N.V. Kurup was a distinguished Indian poet and lyricist, celebrated for his profound contributions to Malayalam literature and music.</p>
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWe2ZuyyV5gRuma9h6aDMr9-nTWUuZUAs9c4D4qaAOsxiSYOSXD7akEyhK6o4qqxxEYzD2qRM9dsfx7C1o93GLl7Y2QU8K_v4azhX-w" alt="Author Name" />
          <h3>KUNJUNNI MASH</h3>
          <p>Kunjunni Mash was a beloved Indian poet known for his simple yet profound Malayalam poetry, which resonated deeply with children and adults alike.</p>
        </li>
      </ul>
      <div className="footer-content">
        <h3>Suggest an Author</h3>
        <form action="/submit-suggestion" method="post">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="author-name">Author's Name:</label>
          <input type="text" id="author-name" name="author-name" required />
          
          <label htmlFor="suggestion">Suggestion Details:</label>
          <textarea id="suggestion" name="suggestion" rows="4" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Authors;
