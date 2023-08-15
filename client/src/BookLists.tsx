import { FC } from 'react';
import { useBookLists } from './hooks/useBookLists';

export const BookLists: FC = () => {
  const { data } = useBookLists();

  return (
    <>
      <h1>Book lists</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ title }) => (
            <tr>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
