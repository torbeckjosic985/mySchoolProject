import { useState } from 'react';

function MySchoolProject() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to My School Project</h1>
      {data && data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <button onClick={() => setData(item)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default MySchoolProject;
