import React from 'react';

const LanguagesTable = ({ data }) => (
  <table>
    <tr>
      <th>Language</th>
      <th>Share</th>
    </tr>

    {data.map(lang => (
      <tr>
        <td>{lang.key}</td>
        <td>{lang.share}</td>
      </tr>
    ))}
  </table>
);

export default LanguagesTable;
