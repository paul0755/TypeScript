# 📝 TypeScript To-Do List

간단한 할 일 목록(Todo List)을 작성할 수 있는 웹 애플리케이션입니다. React 없이 순수 HTML, CSS, TypeScript를 활용하여 DOM 조작과 타입 안정성을 직접 구현하고 학습하는 데에 중점을 두었습니다.

## 🚀 주요 기능

- 할 일 추가 및 목록 렌더링
- 완료된 작업과 미완료 작업을 구분하여 표시

## 🛠️ 사용 기술

- TypeScript
- HTML
- CSS (BEM 네이밍 방식 적용)

## 📁 폴더 구조

📁 project-root/
├── dist/
│ └── script.js # TypeScript 컴파일 결과
├── src/
│ └── script.ts # 주요 TypeScript 로직
├── index.html # HTML 구조
├── style.css # 스타일 정의 (BEM 방식 적용)
└── tsconfig.json # TypeScript 설정 파일

bash
복사
편집

## 🧩 주요 코드 설명

### 📌 Todo 타입 정의 (`script.ts`)

```ts
type Todo = {
  id: number;
  text: string;
};
📌 할 일 추가 기능
ts
복사
편집
const addTodo = (text: string): void => {
  todos.push({ id: Date.now(), text: text });
  todoInput.value = '';
  renderTasks();
};
📌 HTML 요소 가져오기 예시
ts
복사
편집
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const doneList = document.getElementById('done-list') as HTMLUListElement;
✨ 학습 포인트
TypeScript를 JavaScript로 컴파일하여 브라우저에서 실행하는 과정을 이해함

HTML 요소를 가져오고 타입 단언을 통해 정확한 DOM 타입 지정하는 방법 학습

CSS에서 BEM(Block Element Modifier) 방식으로 클래스 이름을 구조적으로 짜는 법을 익힘
