import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx loaded');
console.log('App component:', App);

try {
  const rootElement = document.getElementById("root");
  console.log('Root element:', rootElement);
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  const root = createRoot(rootElement);
  console.log('Root created successfully');
  
  root.render(<App />);
  console.log('App rendered successfully');
} catch (error) {
  console.error('Error during app initialization:', error);
}
