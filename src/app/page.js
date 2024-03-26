import React from 'react';
import Navbar from './components/Navbar';

function HomePage() {
  return (
    <main>
      <Navbar />
      <h1>Bienvenue sur mon site</h1>
      <p>Ceci est ma page d'accueil personnalisée</p>
    </main>
  );
}

export default HomePage;
