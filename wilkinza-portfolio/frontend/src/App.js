// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import GroceriesPage from './pages/GroceriesPage';
import AddGroceriesPageTable from './pages/AddGroceryPageTable';
import EditGroceriesPageTable from './pages/EditGroceryPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

const [grocery, setGrocery] = useState(null);
  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Portfolio</h1>
            <h1><img src="android-chrome-192x192.png" alt="Zachary Wilkins-Olson logo"/> Zachary Wilkins-Olson</h1>
            <p>Track your grocery consumption! Learn about website development!</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}             
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/groceries" element={<GroceriesPage setGrocery={setGrocery} />} />
                    <Route path="/addGroceries" element={<AddGroceriesPageTable />} />
                    <Route path="/editGroceries" element={<EditGroceriesPageTable groceryToEdit={grocery} />} />
                </Routes>
              </section>
          </main>

          <footer>
          <p>&copy; 2024 Zachary Wilkins-Olson</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;