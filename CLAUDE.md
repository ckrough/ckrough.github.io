# dev.krough.org

## Tech Stack
Python 3.13, pytest, ruff, mypy

## Project Structure
- `src/dev.krough.org/` - Main package
- `tests/` - Test suite
- `docs/` - Documentation

## Build/Test Commands
- `uv run pytest` - Run tests
- `uv run ruff check src/` - Lint

## Coding Conventions
<!-- Add non-obvious conventions here. Don't repeat what's in ruff/mypy config. -->

## Architecture Principles
<!-- Add project-specific patterns that aren't obvious from code structure. -->

## Subdirectory Context

Add scoped CLAUDE.md files for area-specific patterns:
- `src/api/CLAUDE.md` - API conventions, auth patterns
- `tests/CLAUDE.md` - Testing utilities, fixtures
- `src/db/CLAUDE.md` - Migration patterns, query conventions