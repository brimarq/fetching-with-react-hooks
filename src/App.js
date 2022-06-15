import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://hn.algolia.com/api/v1/search?query=redux'
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
