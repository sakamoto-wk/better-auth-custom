#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const version = process.env.VERSION || process.argv[2];
if (!version) {
  console.error('VERSION not provided (env VERSION or first arg)');
  process.exit(1);
}

const cwd = process.cwd();
const pkgPath = path.join(cwd, 'package.json');
if (!fs.existsSync(pkgPath)) {
  console.error('package.json not found at', pkgPath);
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.name = '@sakamoto-wk/better-auth';
pkg.version = version;
pkg.homepage = 'https://github.com/sakamoto-wk/better-auth-custom';
pkg.repository = {
  type: 'git',
  url: 'git+https://github.com/sakamoto-wk/better-auth-custom.git',
  directory: 'packages/better-auth',
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
console.log(`Updated package.json at ${pkgPath}`);
console.log(`  name: ${pkg.name}`);
console.log(`  version: ${pkg.version}`);

process.exit(0);
