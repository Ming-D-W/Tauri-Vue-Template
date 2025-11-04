# Contributing to Tauri Vue Desktop Template

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (OS, Node version, Rust version)

### Suggesting Features

Feature requests are welcome! Please create an issue with:
- A clear description of the feature
- Use cases and benefits
- Possible implementation approach (optional)

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/tauri-vue-desktop-template.git
   cd tauri-vue-desktop-template
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow the coding standards below
   - Add tests if applicable
   - Update documentation

4. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description of the changes
   - Reference any related issues
   - Ensure all tests pass

## 📝 Coding Standards

### JavaScript/Vue

- Use ES6+ syntax
- Follow Vue 3 Composition API patterns
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Keep components small and focused

### Rust

- Follow Rust naming conventions
- Use `rustfmt` for formatting
- Run `clippy` for linting
- Add documentation comments (`///`) for public functions
- Handle errors properly (avoid `.unwrap()` in production code)

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add user authentication
fix: resolve database connection issue
docs: update API documentation
```

## 🧪 Testing

Before submitting a PR:

1. **Test the frontend**
   ```bash
   npm run dev
   ```

2. **Test the Rust backend**
   ```bash
   cd src-tauri
   cargo test
   cargo clippy
   ```

3. **Build the application**
   ```bash
   npm run tauri:build
   ```

## 📚 Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Rust (if not already installed):
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

3. Start development:
   ```bash
   npm run tauri:dev
   ```

## 🔍 Code Review Process

All submissions require review. We use GitHub pull requests for this purpose.

Reviewers will check for:
- Code quality and readability
- Adherence to coding standards
- Test coverage
- Documentation updates
- Breaking changes

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 💬 Questions?

Feel free to open an issue for any questions or concerns!

---

Thank you for contributing! 🎉

