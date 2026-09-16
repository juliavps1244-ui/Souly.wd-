-- SOULY CONTROL — estrutura de nuvem
-- Cole todo este arquivo no SQL Editor do Supabase e clique em Run.

create table if not exists public.souly_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.souly_state enable row level security;
revoke all on table public.souly_state from anon, authenticated;
grant select, insert, update, delete on table public.souly_state to authenticated;

drop policy if exists "souly_state_select_own" on public.souly_state;
create policy "souly_state_select_own" on public.souly_state for select to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

drop policy if exists "souly_state_insert_own" on public.souly_state;
create policy "souly_state_insert_own" on public.souly_state for insert to authenticated
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

drop policy if exists "souly_state_update_own" on public.souly_state;
create policy "souly_state_update_own" on public.souly_state for update to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id)
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

drop policy if exists "souly_state_delete_own" on public.souly_state;
create policy "souly_state_delete_own" on public.souly_state for delete to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create table if not exists public.souly_files (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  project_id text not null,
  category text not null default 'Outro',
  name text not null,
  type text,
  size bigint not null default 0,
  path text not null unique,
  created_at timestamptz not null default now()
);

alter table public.souly_files enable row level security;
revoke all on table public.souly_files from anon, authenticated;
grant select, insert, update, delete on table public.souly_files to authenticated;

drop policy if exists "souly_files_select_own" on public.souly_files;
create policy "souly_files_select_own" on public.souly_files for select to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

drop policy if exists "souly_files_insert_own" on public.souly_files;
create policy "souly_files_insert_own" on public.souly_files for insert to authenticated
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

drop policy if exists "souly_files_update_own" on public.souly_files;
create policy "souly_files_update_own" on public.souly_files for update to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id)
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

drop policy if exists "souly_files_delete_own" on public.souly_files;
create policy "souly_files_delete_own" on public.souly_files for delete to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

insert into storage.buckets (id, name, public) values ('souly-files','souly-files',false)
on conflict (id) do update set public=false;

drop policy if exists "souly_storage_select_own" on storage.objects;
create policy "souly_storage_select_own" on storage.objects for select to authenticated
using (bucket_id='souly-files' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists "souly_storage_insert_own" on storage.objects;
create policy "souly_storage_insert_own" on storage.objects for insert to authenticated
with check (bucket_id='souly-files' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists "souly_storage_delete_own" on storage.objects;
create policy "souly_storage_delete_own" on storage.objects for delete to authenticated
using (bucket_id='souly-files' and (storage.foldername(name))[1] = (select auth.uid())::text);
