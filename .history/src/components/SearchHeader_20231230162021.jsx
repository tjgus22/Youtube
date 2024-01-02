import React, { useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';

export default function SearchHeader() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form>
        <input
          onSubmit={handleSubmit}
          type='text'
          placeholder='Search...'
          valuse={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
