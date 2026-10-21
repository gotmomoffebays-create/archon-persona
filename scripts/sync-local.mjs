#!/usr/bin/env node
import { cpSync, mkdirSync, rmSync, existsSync, symlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skills = join(root, 'skills');
const agents = join(homedir(), '.agents', 'skills');
const store = join(
  homedir(),
  'Library/Application Support/Cursor/AgentStores/cursor_agent_stores/u384910598/files/skills',
);
const cursorSkills = join(homedir(), '.cursor', 'skills');
const localPlugin = join(homedir(), '.cursor', 'plugins', 'local', 'archon-persona');

const seats = ['archon', 'blade', 'mirror', 'loom', 'apex-chamber'];

function syncSeat(name) {
  const src = join(skills, name);
  for (const destRoot of [agents, store]) {
    if (!existsSync(destRoot)) continue;
    const dest = join(destRoot, name);
    rmSync(dest, { recursive: true, force: true });
    mkdirSync(dest, { recursive: true });
    cpSync(src, dest, { recursive: true });
  }
  const link = join(cursorSkills, name);
  mkdirSync(cursorSkills, { recursive: true });
  rmSync(link, { recursive: true, force: true });
  try {
    symlinkSync(join(agents, name), link);
  } catch {
    cpSync(join(agents, name), link, { recursive: true });
  }
  console.log('synced', name);
}

for (const s of seats) syncSeat(s);

rmSync(localPlugin, { recursive: true, force: true });
mkdirSync(localPlugin, { recursive: true });
cpSync(join(root, '.cursor-plugin'), join(localPlugin, '.cursor-plugin'), { recursive: true });
cpSync(skills, join(localPlugin, 'skills'), { recursive: true });
console.log('synced local plugin', localPlugin);
