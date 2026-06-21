# To-Do List App

A clean, interactive and minimalistic to-do list web application built with HTML, CSS, and JavaScript. Users can add tasks, mark them as complete, and manage their daily workflow through a minimal, responsive interface.


##  Preview

<img width="1920" height="893" alt="Capturetodo" src="https://github.com/user-attachments/assets/98b448d5-5235-47a8-81d8-ea3ce13b93dd" />

https://muhammadbinwaseem5.github.io/todo-list-app/


##  Features

- Add new tasks using an input field and ADD button
- Mark tasks as complete/incomplete using checkboxes
- Visual distinction between completed and pending tasks
- Clean, responsive UI with a purple gradient background
- Tasks displayed as individual white cards for readability


##  Built With

- **HTML5** — Page structure and semantic markup
- **CSS3** — Styling, layout, gradient background, and card design
- **JavaScript (Vanilla)** — DOM manipulation for adding tasks and toggling checkbox state


##  How It Works

### HTML
The page is structured with a centered container holding a title, an input field paired with an ADD button, and an area where task items are dynamically inserted. Each task item contains a checkbox and a label.

### CSS
- A deep purple radial gradient (`#6b1f5e` to `#3d0f35`) covers the full viewport as the background
- The task input and ADD button are styled as a paired inline row with rounded corners
- Each task renders as a white card with padding, rounded corners, and subtle shadow
- Checkboxes are styled with a dark fill when checked to match the overall theme

### JavaScript
- An event listener on the **ADD** button reads the value from the input field
- A new task element (checkbox + text label) is created and appended to the task list in the DOM
- The input field is cleared after each task is added
- Clicking a checkbox toggles its checked state, visually marking a task complete

## 👤 Author

**Muhammad Bin Waseem**
- GitHub: [@muhammadbinwaseem5](https://github.com/muhammadbinwaseem5)
- LinkedIn: [muhammad-bin-waseem](https://linkedin.com/in/muhammadbinwaseem5)
