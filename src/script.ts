// 1. HTML 요소 가져오기

const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const doneList = document.getElementById('done-list') as HTMLUListElement;

// 2. 할일이 어떻게 생긴건지 TYPE 지정
type Todo = {
    id: number;
    text: string;
};

let todos: Todo[] = [];
let doneTasks: Todo[] = [];

// - 할일 목록 렌더링 하는 함수 정의
const renderTasks = (): void => {
    todoList.innerHTML = '';
    doneList.innerHTML = '';

    todos.forEach((todo): void => {
        const li = createTodoElement(todo, false);
        todoList.appendChild(li);
    });

    doneTasks.forEach((todo): void => {
        const li = createTodoElement(todo, true);
        doneList.appendChild(li);
    });
};

// 3. 할 일 텍스트 입력 처리 함수 (공백 잘라줌 )
const getTodoText = (): string => {
    return todoInput.value.trim();
};

// 4. 할 일 추가 처리 함수
const addTodo = (text: string): void => {
    todos.push({ id: Date.now(), text: text });
    todoInput.value = '';
    renderTasks();
};

// 5. 할 일 상태 변경
const completeTask = (todo: Todo): void => {
    todos = todos.filter((t): boolean => t.id != todo.id);
    doneTasks.push(todo);
    renderTasks();
};

// 6. 완료된 할일 삭제 함수
const deleteTask = (todo: Todo): void => {
    doneTasks = doneTasks.filter((t): boolean => t.id != todo.id);
    renderTasks();
};

// // 7. 할 일 아이템 생성 함수 (완료 여부에 따라 버튼 색상 변경)

const createTodoElement = (todo: Todo, isDone: boolean): HTMLLIElement => {
    const li = document.createElement('li');
    li.classList.add('render-container__item');
    li.textContent = todo.text;

    const button = document.createElement('button');
    button.classList.add('render-container__item-button');

    if (isDone) {
        button.textContent = '삭제';
        button.style.backgroundColor = '#dc3545';
    } else {
        button.textContent = '완료';
        button.style.backgroundColor = '#28a745';
    }

    button.addEventListener('click', (): void => {
        if (isDone) {
            deleteTask(todo);
        } else {
            completeTask(todo);
        }
    });

    li.appendChild(button);
    return li;
};

// <ul id="todo-list" class="render-container__list">
//                         <li class="render-container__item">
//                             <p class="render-container__item-text">123</p>
//                             <button class="render-container__item-button">완료</button>
//                         </li>
//                     </ul>

// 8. 폼 제출 이벤트 리스너
todoForm.addEventListener('submit', (event: Event): void => {
    event.preventDefault();
    const text = getTodoText();
    if (text) {
        addTodo(text);
    }
});

renderTasks();
