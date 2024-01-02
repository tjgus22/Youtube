import React, { useState } from 'react';
import { BsYoutube } from 'react-icons/bs';

export default function SearchHeader() {
  const [text, setText] = useState('');
  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form>
        <input
          type='text'
          placeholder='Search...'
          valuse={text}
          onChange={(e) => SetText(e.targer.value)}
        />
      </form>
    </header>
  );
}
