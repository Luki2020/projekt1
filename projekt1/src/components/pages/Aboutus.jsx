import React from "react";

export const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>O nas</h1>
      <p style={styles.paragraph}>
        Witaj na stronie Przepisy Kulinarnie! Jesteśmy zespołem pasjonatów gotowania, którzy kochają dzielić się swoimi przepisami i pomysłami kulinarnymi z innymi.
      </p>
      <p style={styles.paragraph}>
        Nasza strona oferuje szeroki wybór przepisów na różnorodne potrawy - od prostych i szybkich dań na co dzień po wykwintne specjały na specjalne okazje. Niezależnie od tego, czy jesteś doświadczonym kucharzem czy początkującym entuzjastą kulinarnym, znajdziesz tutaj inspirację do gotowania i eksperymentowania w kuchni.
      </p>
      <p style={styles.paragraph}>
        Naszym celem jest stworzenie społeczności kulinarnych miłośników, którzy dzielą się swoimi doświadczeniami, pomagają sobie nawzajem i inspirują się nawzajem do tworzenia pysznych potraw.
      </p>
      <p style={styles.paragraph}>
        Dołącz do naszej społeczności już dziś i zacznij odkrywać świat kulinarnych możliwości!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '15px',
  }
};

export default AboutUs;
