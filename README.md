## Introduction
Welcome to our coding test. This coding test has four main tasks and should be completed before the deadline mentioned at the bottom of the page. The test was designed to test the applicant’s skills with regard to performance optimization, hooks, Redux, jsx, typescript, css and a little bit of algorithms and data structures. Please use Typescript as much as can be reasonably expected. Good luck! If you have any questions or find any bugs, don’t hesitate to contact us.

## Installation
Use git to clone the project. From the project directory, run the yarn commands stated below. Please use Node version **>=14**.

```
yarn install
yarn start
```

## Tasks
1. Visit /user-list. There you will see the "INCREASE PAGE COUNTER" button at the top of the page. On click, this button will increase the local Page counter. ![image](https://user-images.githubusercontent.com/12097191/147699848-b4a1b37d-9c41-40d7-95e2-5d20560b7658.png)
    1.1. Clicking the "INCREASE PAGE COUNTER" button will re-render the page and thus re-render the table and the "Table rendered at..." text. Fix this so that clicking the button will only increment the Page Counter and won't re-render the table.


2. In the table each row has a button "INCREASE HEADER COUNTER". ![image](https://user-images.githubusercontent.com/12097191/147705472-8bfb552c-00e0-44ee-a8a7-a2fde872c26b.png)
    2.1. Clicking the “INCREASE HEADER COUNTER” button should increment the header counter on the page toolbar. Use redux for this task.\
    2.2. Clicking the "INCREASE HEADER COUNTER" button should not toggle the expansion nor collapse of the row this button is on.


3. On row expansion you will see a placeholder "Show card here". Please add a card based on the design provided below. Note -  Use the test data that is provided and used in the table. ![image](https://user-images.githubusercontent.com/12097191/147707329-9ead4635-ab01-41a9-9a92-97b7aa1827c1.png)
![image](https://user-images.githubusercontent.com/12097191/147724723-c8a34b61-4f72-4d87-8e5c-6deed66468f2.png)

4. In /family-tree, you can find a function that generates a simple family tree and returns a dictionary and the root of the tree. This tree is stored in a dictionary just like we store data in a normalized and flattened redux data store. To traverse the tree, you will need to start at the root that is given as rootId, get the corresponding node from the familyTreeDict, and traverse its children until you reach the leaves. Use the Tree view component from [Material UI](https://mui.com/components/tree-view/) to display the names of the family tree.

## Deadline
**Create a PR with the solution to these tasks before or on the 14th of January 2022.**
This is my fifth change.
This is my first change.
