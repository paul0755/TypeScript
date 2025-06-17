# 📝 TypeScript To-Do List

간단한 할 일 목록(To-Do List)을 작성할 수 있는 웹 애플리케이션입니다. React 없이 순수 HTML, CSS, TypeScript를 활용하여 DOM 조작과 타입 안정성을 직접 구현하고 학습하는 데에 중점을 두었습니다.

---

## 🚀 주요 기능

- 할 일 추가 및 목록 렌더링
- 완료된 작업과 미완료 작업을 구분하여 표시

---

## 📷 기능 구현 

![todo-list](https://github.com/user-attachments/assets/e4fc6af4-6227-4ab8-8f86-cf590bc7aa8f)


## 🛠️ 사용 기술

- TypeScript
- HTML
- CSS (BEM 네이밍 방식 적용)

---

## 📁 폴더 구조
📁 project-root/

├── dist/

│ └── script.js # TypeScript 컴파일 결과

├── src/

│ └── script.ts # 주요 TypeScript 로직

├── index.html # HTML 구조

├── style.css # 스타일 정의 (BEM 방식 적용)

└── tsconfig.json # TypeScript 설정 파일

## 📌 할 일 추가 기능
```ts
const addTodo = (text: string): void => {
  todos.push({ id: Date.now(), text: text });
  todoInput.value = '';
  renderTasks();
};
```

## 📌 HTML 요소 가져오기 예시
```ts
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const doneList = document.getElementById('done-list') as HTMLUListElement;

```

## 📌 전체 코드 예시
```ts
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

// 7. 할 일 아이템 생성 함수 (완료 여부에 따라 버튼 색상 변경)
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

// 8. 폼 제출 이벤트 리스너
todoForm.addEventListener('submit', (event: Event): void => {
    event.preventDefault();
    const text = getTodoText();
    if (text) {
        addTodo(text);
    }
});

renderTasks();
```
## ✨ 학습 포인트

- TypeScript를 JavaScript로 컴파일하여 브라우저에서 실행하는 과정을 이해함

- HTML 요소를 가져오고 타입 단언을 통해 정확한 DOM 타입 지정하는 방법 학습

- CSS에서 BEM(Block Element Modifier) 방식으로 클래스 이름을 구조적으로 짜는 법을 익힘
