import { TaskForm } from "~/components/TaskForm";
import { api } from "~/trpc/server";

export default async function TasksPage() {
  const tasks = await api.task.getAll();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">タスク一覧</h1>
      <TaskForm />
      <ul className="mt-8 space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="rounded-lg border p-4 shadow">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            {task.description && (
              <p className="mt-2 text-gray-600">{task.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
