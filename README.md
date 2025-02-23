# TypeScript Shallow Comparison Bug

This repository demonstrates a common bug in TypeScript: shallow comparison of objects.  The `compareObjects` function, as implemented in `bug.ts`, only performs a shallow comparison, leading to incorrect results when comparing objects with nested objects. The corrected version is shown in `bugSolution.ts`.

## Bug

The original `compareObjects` function fails to recursively compare nested objects.  This means that if two objects have the same keys but different nested objects, the function will incorrectly return `true`.

## Solution

The solution implements a recursive comparison function to handle nested objects correctly. This ensures accurate comparison even for complex object structures.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` and `bugSolution.ts`.
3. Observe the difference in behavior when comparing objects with nested objects. 