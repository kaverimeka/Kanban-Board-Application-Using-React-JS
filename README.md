# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# Kanban Board Application

This Kanban board application allows users to manage tasks across different stages: To Do, In Progress, Peer Review, and Done. The board supports drag-and-drop functionality for task movement and includes a search box to filter tasks by title.

## Features

- **Kanban Board Layout**: Four sections/columns representing task stages:
  - To Do
  - In Progress
  - Peer Review
  - Done

- **Task Cards**: Each task card displays:

  - Task Title
  - Task Description
  - Tasks are draggable between columns.

- **Drag and Drop Functionality**: Move tasks between columns and place them in the correct position.
- **Search Functionality**: Filter tasks in all columns based on the search input.
- **Add New Tasks**: Create new tasks in the To Do column.
- **Responsive Design**: The UI is fully responsive.
- **State Management**: Uses Redux for state management.
- **Styling**: Uses Material-UI for styling.

## Technologies Used

- ReactJS
- Redux
- React-DnD (for drag-and-drop functionality)
- Material-UI (for styling)
- Local Storage (for data persistence)

## Getting Started

### Prerequisites

- npm 

### Installation

1. Clone the repository:

bash
git clone https://github.com/kaverimeka/kanban-board.git
cd kanban-board

Usage

Creating a New Task
Click the floating button to open the new task modal.
Fill in the task title and description.
Click "Create" to add the task to the "To Do" column.
Moving Tasks
Drag a task card to move it to a different column.
Drop the task card in the desired column.
Searching Tasks
Type in the search bar to filter tasks by title.
Matching tasks will be displayed, and non-matching tasks will be hidden.

Features

1. Kanban Board Layout

Four Sections/Columns:
To Do: Tasks that need to be started.
In Progress: Tasks that are currently being worked on.
Peer Review: Tasks that are completed and are awaiting review.
Done: Tasks that are completed and reviewed.
Each section displays the tasks relevant to that stage.

2. Task Cards
Task Information:
Task Title: Displayed prominently on the card.
Task Description: Displayed in a shortened form to fit within the card.
Draggable: Tasks can be dragged and dropped between columns.

3. Drag and Drop Functionality
Drag-and-Drop: Implemented using React-DnD library.
Movement: Tasks can be moved from one column to another.
Positioning: Tasks can be placed in a specific order within a column.

4. Search Functionality
Search Bar: Located at the top of the board.
Filtering: Filters tasks based on the search input in real-time.
Matching Tasks: Only tasks that match the search query are displayed.
Non-Matching Tasks: Tasks that do not match the search query are hidden.

5. Add New Tasks
Floating Button: A button that opens a modal to create new tasks.
Task Creation Form:
Task Title: Input field for the task title.
Task Description: Input field for the task description.
New Tasks: Created tasks are added to the "To Do" column.

6. Responsive Design
Responsive UI: The application layout adjusts to different screen sizes, ensuring usability on both desktop and mobile devices.

7. State Management
Redux: State management is handled using Redux.
Actions and Reducers: Organized actions and reducers to manage the state of tasks.

8. Styling
Material-UI: Used for consistent and modern styling of the application components.
Custom Styles: Additional styles for specific components to ensure a polished look.

9. Data Persistence
Local Storage: Tasks are stored in local storage, ensuring that task data persists across page reloads.