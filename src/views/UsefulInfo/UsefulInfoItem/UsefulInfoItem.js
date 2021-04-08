import React from 'react';

function UsefullInfoItem({ name, ref }) {
  return (
    <>
      <a href={ref}>{name}</a>
    </>
  );
}
export default UsefullInfoItem;
