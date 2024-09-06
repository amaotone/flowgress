<script lang="ts">
import { Button } from "$lib/components/ui/button";
</script>

<nav class="bg-primary text-primary-foreground shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="text-xl font-bold">flowgress</a>
      </div>
      <div class="flex items-center">
        <Button variant="ghost" class="text-primary-foreground">ホーム</Button>
        <Button variant="ghost" class="text-primary-foreground">タスク</Button>
        <Button variant="ghost" class="text-primary-foreground">分析</Button>
        <Button variant="ghost" class="text-primary-foreground">設定</Button>
      </div>
    </div>
  </div>
</nav>
