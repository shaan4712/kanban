# Interactive Kanban Board

A dynamic Kanban board built with React for visualizing and managing tickets with customizable grouping and sorting options.

## Live Link
[Kanban Board](https://kanban-self-omega.vercel.app/)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Integration](#api-integration) 
- [Build & Deploy](#build-and-deploy)

![image](https://github.com/user-attachments/assets/8d938281-e005-49a9-9eb1-23cb92f6b5bf)

![image](https://github.com/user-attachments/assets/ca0e9bc0-18c9-43ab-97db-0cf9da539700)

![image](https://github.com/user-attachments/assets/aea2d920-22e4-44c3-8c75-01362b5b2ccb)

## Features

**Grouping Options**: Group tickets by
 - Status 
 - User
 - Priority

**Sorting Options**:
 - Priority (Highest to Lowest)
 - Title (A-Z)

**Functionalities**:
 - Add new tickets
 - Change ticket status
 - Dynamic card counts
 - Persistent view settings
 - Responsive design
 - User avatars & priorities

## Installation

1. Clone the Repository:
```bash
git clone https://github.com/yourusername/kanban-board.git
cd kanban-board
```

2. Install Dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open http://localhost:3000 in your browser.

## Project Structure

```plaintext
src/
├── components/
│   ├── AddTicketModal.jsx          # Modal for adding new tickets
│   ├── Card.jsx                    # Individual ticket display
│   ├── Column.jsx                  # Column layout component
│   ├── DisplayOptions.jsx          # Grouping and sorting options
│   ├── Header.jsx                  # App header with controls
│   └── KanbanBoard.jsx            # Main board component
├── css-files/                      # Styling for components
│   ├── AddTicketModal.css
│   ├── Card.css  
│   ├── Column.css
│   ├── DisplayOptions.css
│   ├── Header.css
│   └── KanbanBoard.css
├── utils/
│   └── apiUtils.js                 # API integration functions
├── assets/                         # Icons and images
│   ├── priority/                   # Priority level icons
│   └── status/                     # Status icons
├── App.js                          # Main application component
└── index.js                        # Entry point
```

Start Development Server
```bash
npm start
```

## Tech Stack

- React
- CSS3
- Local Storage for persistence
- API integration

## Usage

1. Click the "Display" button to access grouping and sorting options
2. Add new tickets using the "+" button in any column
3. Change ticket status by clicking the status icon (when not grouped by status)
4. View counts and manage tickets within each column

## Build and Deployment

```bash
npm run build
```

Builds the app for production to the build folder.
