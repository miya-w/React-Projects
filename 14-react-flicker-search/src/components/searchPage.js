import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSummit(e) {
    e.preventDefault();
    console.log("test!");
    navigate(`/search/${query}`);
  }
  return (
    <div>
      <h2>Flicker Search</h2>
      <form onSubmit={handleSummit}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
        />
        <button>Search</button>
      </form>
      <Outlet />
    </div>
  );
}

export default SearchPage;
