# Adapters

The `adapters` directory contains adapters used to standardize input/output data for entities within the system. These adapters help ensure data consistency before it is used in the application.

## Purpose

Adapters in this directory are used to:
- Standardize the data structure of entities.
- Add or process internal properties to facilitate logic handling.
- Ensure input data is in the correct format before usage.
- Separate data transformation logic from core business logic.

## Directory Structure

```
src/
  ├── adapters/
  │   ├── lessons/
  │   │   ├── index.ts
  │   ├── users/
  │   │   ├── index.ts
  │   ├── products/
  │   │   ├── index.ts
```

## Usage

These adapters should be used before data is processed or displayed to ensure consistency within the application.

Example usage:

```ts
import { lessonAdaptee } from '@/shared/adapters/lessons';
import { ILesson } from '@vardytests/vdt-js';

const lesson: ILesson = getLessonData(); // Retrieve data from API or other sources
const adaptedLesson = lessonAdaptee(lesson);
console.log(adaptedLesson);
```

## Guidelines for Adding New Adapters

- Each adapter should focus on a specific entity (e.g., lessons, users, products).
- Do not modify input data directly without using an adapter.
- Ensure that adapters do not alter data beyond their intended scope.
- Provide documentation and usage examples for each adapter to help other developers understand and apply them easily.

## Notes
- Avoid direct modifications to input data without utilizing an adapter.
- Always apply adapters before using data in the application.

