import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h1>Welcome to Our Website</h1>
          <p>This is the homepage content.</p>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>Information about our company.</p>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>Details of the services we offer.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>How to get in touch with us.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
