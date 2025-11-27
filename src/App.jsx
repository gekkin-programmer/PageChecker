//importation of the react components
import { useState } from "react";
import "./App.css";

//Using useState hooks for the checkboxes
export default function App() {
  const [pages, setPages] = useState([
    { id: 0, label: "All pages", checked: false },
    { id: 1, label: "Page 1", checked: false },
    { id: 2, label: "Page 2", checked: false },
    { id: 3, label: "Page 3", checked: false },
    { id: 4, label: "Page 4", checked: false },
  ]);

  const toggleCheckbox = (id) => {
    setPages(
      pages.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="container">
      <div className="card">
       
        <div className="checkbox-list">
          {pages.map((item) => (
            <label key={item.id} className="checkbox-row">
              {item.label}
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleCheckbox(item.id)}
              />
            </label>
          ))}
        </div>
        <button className="done-btn">Done</button>
      </div>
    </div>
  );
}
