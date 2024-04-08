import React from 'react';
import { SearchBar } from '../components/searchbar';
import { Aegis } from '../components/Aegis';
import Prompt from '../components/prompt'; // Adjust the import path if necessary
import Output from '../components/output';
import Vuln from '../components/vul';
function Home() {
  return (
    <div>
      <Prompt/>
      <Output/>
      <Vuln/>
      {/* <Aegis/> */}
      {/* <SearchBar/> */}
    </div>
  );
}

export default Home;
