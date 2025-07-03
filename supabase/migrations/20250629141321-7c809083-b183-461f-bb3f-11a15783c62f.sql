
-- Create signups table
create table public.signups (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  suggestions text,
  role text not null check (role in ('developer', 'client')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Row Level Security)
alter table public.signups enable row level security;

-- Create policy to allow inserts for anyone (since this is a signup form)
create policy "Anyone can insert signups" on public.signups
  for insert with check (true);

-- Create policy to allow admins to read all signups (you can modify this based on your needs)
create policy "Admins can read signups" on public.signups
  for select using (false); -- Change this to your admin logic when needed
