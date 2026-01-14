---
name: architecture
description: Read when onboarding or making architectural decisions. Covers style, tech stack, structure.
category: reference
when_to_use:
- Starting work on a new feature
- Onboarding to the codebase
- Making architectural decisions
- Understanding how components fit together
dependencies:
- development-standards.md
- decisions/
---
# dev.krough.org Architecture

personal website

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         DATA FLOW                               │
│  [Input] → [Processing] → [Storage] → [Output]                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                       APPLICATION                               │
│  [API Layer] ←→ [Business Logic] ←→ [Data Layer]               │
└─────────────────────────────────────────────────────────────────┘
```

<!-- Replace with your system's actual data flow diagram -->

## Architecture Style: Layered Architecture

**Why this approach:**
- Clear separation of concerns
- Dependencies flow in one direction
- Easy to test and maintain
- Supports incremental development

## Tech Stack

### Backend (Python 3.13)

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Framework | FastAPI | Async, modern, excellent docs |
| Validation | Pydantic | Type-safe data validation |
| Logging | structlog | Structured JSON logging |
| Config | pydantic-settings | Environment-based configuration |

<!-- Add your tech stack choices -->



## Project Structure

```
dev.krough.org/
├── src/
│   ├── __init__.py
│   ├── main.py                 # Application entry point
│   ├── config.py               # Configuration settings
│   │
│   ├── modules/                # Business modules
│   │   └── <module>/
│   │       ├── __init__.py
│   │       ├── routes.py       # API endpoints
│   │       ├── services.py     # Business logic
│   │       ├── schemas.py      # Request/response models
│   │       └── models.py       # Domain models
│   │
│   └── infrastructure/         # Shared technical concerns
│       ├── database.py
│       ├── logging.py
│       └── ...
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── conftest.py
│
├── docs/
├── pyproject.toml
└── README.md
```

<!-- Customize to match your project structure -->

## Key Design Patterns

### Dependency Injection

Services receive dependencies through constructors for testability:

```python
class MyService:
    def __init__(self, db: Database | None = None) -> None:
        self._db = db or Database()
```

### Module Structure

Each module in `src/modules/` is self-contained:

```
module_name/
├── __init__.py
├── routes.py       # API endpoints
├── services.py     # Business logic
├── schemas.py      # Pydantic models
└── models.py       # Domain models
```

### Configuration

Use `pydantic-settings` for all configuration. Environment variables override defaults.

## Related Documents

- [TODO](../../TODO.md) - Active tasks
- [Development Standards](development-standards.md)
- [Architecture Decision Records](../adr/)