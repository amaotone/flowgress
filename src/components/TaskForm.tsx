"use client";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const utils = api.useUtils();
  const createTask = api.task.create.useMutation({
    onSuccess: async () => {
      setTitle("");
      setDescription("");
      await utils.task.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTask.mutate({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          タイトル
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          説明
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button type="submit" disabled={createTask.isPending}>
        {createTask.isPending ? "登録中..." : "タスクを登録"}
      </Button>
    </form>
  );
}
