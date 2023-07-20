import TodoList from "./TodoList";
import InProgress from "./InProgress";
import InReview from "./InReview";
import Done from "./Done";

export default function Body() {
  return (
    <div className="task-body m-5 relative">
      <TodoList />
      <InProgress />
      <InReview />
      <Done />
    </div>
  );
}
