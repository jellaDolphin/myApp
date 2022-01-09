import fakerStatic from 'faker';
import { range } from 'lodash';

type iCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};
type iDataObject = {
  name: string;
  phone: string;
  email: string;
  company: iCompany;
};
export type iData = Array<iDataObject>;

const data: iData = range(500).map(() => ({
  name: fakerStatic.name.findName(),
  email: fakerStatic.internet.email(),
  phone: fakerStatic.phone.phoneNumber(),
  company: {
    name: fakerStatic.company.companyName(),
    catchPhrase: fakerStatic.company.catchPhrase(),
    bs: fakerStatic.company.bs(),
  },
}));

export const generateData = () =>
  range(500).map(() => ({
    name: fakerStatic.name.findName(),
    email: fakerStatic.internet.email(),
    phone: fakerStatic.phone.phoneNumber(),
    company: {
      name: fakerStatic.company.companyName(),
      catchPhrase: fakerStatic.company.catchPhrase(),
      bs: fakerStatic.company.bs(),
    },
  }));

export interface FamilyNode {
  id: string;
  name: string;
  children: string[];
}

export interface FamilyTreeDict {
  [index: string]: FamilyNode;
}

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

let familyTreeDict: FamilyTreeDict = {};
const familyName = fakerStatic.name.lastName();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const generateFamilyTree = (): {
  rootId: string;
  familyTreeDict: FamilyTreeDict;
} => {
  familyTreeDict = {};
  var rootId = generateUUID();

  const root: FamilyNode = {
    id: rootId,
    name: 'Grandfather of all ' + familyName,
    children: [],
  };

  familyTreeDict[root.id] = root;

  var maxDepth = getRandomInt(3) + 3;
  console.log(maxDepth);
  createFamilyNode(0, maxDepth, root);

  return {
    rootId: rootId,
    familyTreeDict: familyTreeDict,
  };
};

function createFamilyNode(
  currDepth: number,
  maxDepth: number,
  parentNode: FamilyNode,
) {
  if (currDepth >= maxDepth) {
    return;
  }

  const humanNode: FamilyNode = {
    id: generateUUID(),
    name: fakerStatic.name.firstName() + ' ' + familyName,
    children: [],
  };

  familyTreeDict[humanNode.id] = humanNode;
  parentNode.children.push(humanNode.id);

  var nrOfChildren = getRandomInt(5);
  for (var i = 0; i < nrOfChildren; i++) {
    createFamilyNode(currDepth++, maxDepth, humanNode);
  }
}

export default data;
