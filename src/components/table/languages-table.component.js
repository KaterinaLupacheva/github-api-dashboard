import React from 'react';
import { TableContainer } from './languages-table.styles';

const LanguagesTable = ({ data }) => (
  <TableContainer>
    <tr>
      <th>Language</th>
      <th>Share</th>
    </tr>

    {data.map(lang => (
      <tr>
        <td>{lang.key}</td>
        <td>
          {lang.share}
          {'%'}
        </td>
      </tr>
    ))}
  </TableContainer>
);

export default LanguagesTable;
