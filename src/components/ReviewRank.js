import React, { useState } from 'react';

const dummy_prop = {
  first: '리뷰1',
  second: '리뷰2',
  third: '리뷰3',
}


function ReviewRank() {
  const {first, second, third} = dummy_prop
  return (
    <div>
      <h3>실시간 인기 리뷰</h3>
      <p>1️⃣{first}</p>
      <p>2️⃣{second}</p>
      <p>3️⃣{third}</p> 
    </div>
  );
}

export default ReviewRank;