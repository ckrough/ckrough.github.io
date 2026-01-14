---
name: readme
description: Read for project overview, setup instructions, and usage. Entry point for new contributors.
category: root
when_to_use:
- Starting a new project
---
# dev.krough.org

personal website

## Features

- Feature 1
- Feature 2
- Feature 3

## Quick Start

### Prerequisites

- Python 3.13
- [uv](https://docs.astral.sh/uv/) (Python package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/username/dev.krough.org.git
cd dev.krough.org

# Install dependencies
uv sync

# Run the application
uv run dev.krough.org
```

## Usage

```bash
# Example command
uv run dev.krough.org --help
```

## Configuration

Configuration is handled via environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `LOG_LEVEL` | Logging verbosity | `INFO` |

## Development

```bash
uv run pytest              # Run tests
uv run ruff check src/     # Lint
uv run ruff format src/    # Format
uv run mypy src/           # Type check
```

## Architecture

See [docs/design/architecture.md](docs/design/architecture.md) for detailed system design.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and contribution guidelines.

## License

MIT