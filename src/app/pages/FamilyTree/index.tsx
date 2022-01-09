/**
 *
 * FamilyTree
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { generateFamilyTree } from 'utils/testData';

interface Props {}
//Ignore until question 4
const familyTreeData = generateFamilyTree();

  const rootId = familyTreeData.rootId;  // eslint-disable-line
  const familyTreeDict = familyTreeData.familyTreeDict; // eslint-disable-line

export function FamilyTree(props: Props) {
  return (
    <Div>
      <h2> Family Tree </h2>
      {/* Generate family tree here */}
    </Div>
  );
}

const Div = styled.div``;
