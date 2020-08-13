import React, { useState } from 'react';


const dummy_prop = {
  first: 'User1',
  second: 'User2',
  third: 'User3',
}


function UserRank() {
  const {first, second, third} = dummy_prop
  return (
    <div>
      <h3>이달의 인기 멤버</h3> 
      <p>1️⃣{first}</p>
      <p>2️⃣{second}</p>
      <p>3️⃣{third}</p>  
    </div>
  );
}

export default UserRank;