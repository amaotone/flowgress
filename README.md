# Flowgress

## 主要機能

1. 翌日計画

   - 新しいタスクの追加
   - タスクの分割と整理
   - 翌日の計画立案

2. 当日実行

   - タスクの優先順位付け
   - 所要時間の見積もり
   - タスクの実行と進捗管理

3. 記録と分析

   - タスクの実行時間記録
   - 完了タスクの管理
   - 生産性分析とレポート

4. 習慣化支援

   - 定期的なタスクの自動生成
   - 長期プロジェクトの管理
   - 目標達成のための進捗トラッキング

## 技術スタック

- フロントエンド: Next.js, React, TypeScript
- バックエンド: tRPC, Prisma
- データベース: PostgreSQL
- 認証: NextAuth.js
- スタイリング: Tailwind CSS

## 開発環境のセットアップ

1. リポジトリをクローンする

   ```bash
   git clone https://github.com/amaotone/flowgress.git
   cd flowgress
   ```

2. 依存関係をインストールする

   ```bash
   pnpm install
   ```

3. 環境変数を設定する
   `.env.example`ファイルを`.env`にコピーし、必要な値を設定してください。

4. データベースをセットアップする

   ```bash
   pnpm db:push
   ```

5. 開発サーバーを起動する

   ```bash
   pnpm dev
   ```
