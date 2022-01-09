/**
 *
 * User
 *
 */
import { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { Button } from '@mui/material';
import { generateData } from '../../../utils/testData';
import DataTable from './DataTable';
interface Props {}

export const User = memo((props: Props) => {
  const [count, setCount] = useState(0);
  const data = generateData();
  return (
    <Div>
      <Button onClick={() => setCount(count + 1)}>Increase page counter</Button>
      <span>Page Counter: {count}</span>
      <DataTable data={data} />
    </Div>
  );
});

const Div = styled.div``;
