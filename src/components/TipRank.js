import React, { useState } from 'react';


const dummy_prop = {
  first: '꿀팁1',
  second: '꿀팁2',
  third: '꿀팁3',
}


function TipRank() {
  const {first, second, third} = dummy_prop
  return (
    <div>
      <h3>실시간 인기 꿀팁</h3>
      <p>1️⃣{first}</p>
      <p>2️⃣{second}</p>
      <p>3️⃣{third}</p>  
    </div>
  );
}

export default TipRank;