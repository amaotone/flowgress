import type { Task } from "@prisma/client";
import { TaskForm } from "~/components/TaskForm";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  let tasks: Task[] = [];
  let error = null;

  if (session) {
    try {
      tasks = await api.task.getAll();
    } catch (e) {
      console.error("タスクの取得に失敗しました:", e);
      error = "タスクの取得に失敗しました。";
    }
  }

  return (
    <main className="container mx-auto p-4">
      {session ? (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>新しいタスク</CardTitle>
            </CardHeader>
            <CardContent>
              <TaskForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>タスク一覧</CardTitle>
            </CardHeader>
            <CardContent>
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>タイトル</TableHead>
                      <TableHead>説明</TableHead>
                      <TableHead>ステータス</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell className="font-medium">
                          {task.title}
                        </TableCell>
                        <TableCell>{task.description}</TableCell>
                        <TableCell>{task.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>ようこそ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">ログインしてタスクを管理しましょう</p>
            <Button asChild>
              <a href="/api/auth/signin">ログイン</a>
            </Button>
          </CardContent>
        </Card>
      )}

      {session && (
        <div className="mt-8 text-center">
          <p className="mb-2">ログイン中: {session.user?.name}</p>
          <Button variant="outline" asChild>
            <a href="/api/auth/signout">ログアウト</a>
          </Button>
        </div>
      )}
    </main>
  );
}
