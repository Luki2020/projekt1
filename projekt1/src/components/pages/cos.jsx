import React from 'react';
import './RecipePage.css'; // Importujemy plik stylizacji dla strony z przepisami

const RecipePage = () => {
  return (
    <div className="recipe-page">
      <h1>Przepisy Kulinarnie</h1>
      <div className="recipe-grid">
        {/* Kafelek 1 */}
        <div className="recipe-card">
          <img src="https://cdn.galleries.smcloud.net/t/photos/gf-PdMK-e2Bz-sqYA_salatka-cezar-z-kurczakiem-wedlug-magdy-gessler-z-kuchennych-rewolucji-w-barze-kwadratowy-talerz.jpg" alt="Przepis 1" className="recipe-image" />
          <div className="recipe-description">
            <h2>Sałatka Cezar</h2>
            <p>Klasyka kuchni amerykańskiej z sałaty rzymskiej, grzankami, serem parmezan i sosem Cezara.</p>
            <p>Świeża i chrupiąca sałatka, idealna jako przystawka lub lekki posiłek.</p>
          </div>
        </div>
        {/* Kafelek 2 */}
        <div className="recipe-card">
          <img src="https://wsuwaj.pl/wp-content/uploads/2023/12/spaghetti-bolognese-2.jpg" alt="Przepis 2" className="recipe-image" />
          <div className="recipe-description">
            <h2>Spaghetti Bolognese</h2>
            <p>Tradycyjne włoskie danie z makaronem spaghetti i sosu mięsnego z pomidorów.</p>
            <p>Doskonałe danie na szybki obiad lub kolację.</p>
          </div>
        </div>
        {/* Kafelek 3 */}
        <div className="recipe-card">
          <img src="https://www.esencjakulinarna.pl/wp-content/uploads/2023/09/Kurczak-tikka-masala.jpg" alt="Przepis 3" className="recipe-image" />
          <div className="recipe-description">
            <h2>Kurczak Tikka Masala</h2>
            <p>Indyjskie danie z kurczaka w aromatycznym sosie na bazie pomidorów, jogurtu i przypraw.</p>
            <p>Wyrazisty i pikantny smak, idealny w połączeniu z ryżem lub naanem.</p>
          </div>
        </div>
        {/* Dodaj więcej kafelków według potrzeb */}
      </div>
    </div>
  );
};

export default RecipePage;
