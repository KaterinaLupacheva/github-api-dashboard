import React from 'react';
import { TableContainer } from './languages-table.styles';

const LanguagesTable = ({ data }) => (
  <TableContainer>
    <thead>
      <tr>
        <th>Language</th>
        <th>Share</th>
      </tr>
    </thead>

    <tbody>
      {data.map(lang => (
        <tr key={lang.key}>
          <td>{lang.key}</td>
          <td>
            {lang.share}
            {'%'}
          </td>
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

export default LanguagesTable;
