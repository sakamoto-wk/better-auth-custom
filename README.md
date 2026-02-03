# About This Project

This is a customized fork of [better-auth](https://github.com/better-auth/better-auth) with enhancements tailored to application-specific requirements.

## Customizations

1. [Resolved InternalAdapter deadlock issue](https://github.com/better-auth/better-auth/pull/7758)

## Usage

### Branch Structure

- `main`: Tracks [better-auth/better-auth](https://github.com/better-auth/better-auth) upstream
- `develop`: Development branch; based on `main`
- `customize/*`: Contains customization changes

### Syncing Changes from Upstream

#### Updating `main` branch

```sh
git fetch upstream
git checkout main
git rebase upstream/main
git push origin main
```

#### Updating `develop` branch

```sh
git fetch origin
git checkout develop
git checkout -b customize/merge-v1.1.2
git rebase upstream/main
```

## Repository Setup Instructions

### 1. Clone better-auth

```sh
git clone -b main --single-branch --no-tags https://github.com/better-auth/better-auth.git better-auth-custom
```

### 2. Configure Remote Repositories

```sh
# Check current remotes
git remote -v

git remote rename origin upstream
git remote add origin https://github.com/sakamoto-wk/better-auth-custom.git

# Disable pushes to upstream
git remote set-url --push upstream DISABLED

# Verify the configuration
git remote -v
```

### 3. Push `main` Branch to Origin

```sh
git branch -M main
git push -u origin main
```

### 4. Create `develop` Branch

```sh
git checkout main
git checkout -b develop
git push -u origin develop
```

### 5. Create a Feature Branch

```sh
git checkout develop
git checkout -b customize/project-setting
```

---

# Upstream Project README Follows

## About the Project

Better Auth is framework-agnostic authentication (and authorization) library for TypeScript. It provides a comprehensive set of features out of the box and includes a plugin ecosystem that simplifies adding advanced functionalities with minimal code in short amount of time. Whether you need 2FA, multi-tenant support, or other complex features. It lets you focus on building your actual application instead of reinventing the wheel. 

### Why Better Auth

Authentication in the TypeScript ecosystem is a half-solved problem. Other open-source libraries often require a lot of additional code for anything beyond basic authentication. Rather than just pushing third-party services as the solution, I believe we can do better as a community—hence, Better Auth.

## Contribution

Better Auth is free and open source project licensed under the [MIT License](./LICENSE.md). You are free to do whatever you want with it.

You could help continuing its development by:

- [Contribute to the source code](./CONTRIBUTING.md)
- [Suggest new features and report issues](https://github.com/better-auth/better-auth/issues)

## Security
If you discover a security vulnerability within Better Auth, please send an e-mail to security@better-auth.com.

All reports will be promptly addressed, and you'll be credited accordingly.
