import React from 'react';
import { BsYoutube } from 'react-icons/bs';

export default function SearchHeader() {
    const 
  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form>
        <input type="text" placeholder='Search...', valuse={text} onChange={(e) => StyleSheetContext(e.targer.value)}/>
      </form>
    </header>
  );
}
