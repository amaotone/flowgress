import { TaskForm } from "~/components/TaskForm";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();
  const tasks = await api.task.getAll();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          flow<span className="text-[hsl(280,100%,70%)]">gress</span>
        </h1>

        {session ? (
          <div className="w-full max-w-md">
            <TaskForm />
            <ul className="mt-8 space-y-4">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="rounded-lg border border-white/10 p-4 shadow"
                >
                  <h2 className="text-lg font-semibold">{task.title}</h2>
                  {task.description && (
                    <p className="mt-2 text-gray-300">{task.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-2xl">ログインしてタスクを管理しましょう</p>
        )}

        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <a
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
