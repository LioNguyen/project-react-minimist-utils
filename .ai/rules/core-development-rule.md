# Core Development Rules for React Minimist Utils

## 1. Overview

This document establishes the fundamental development principles and standards for the React Minimist Utils project. These rules ensure consistency, maintainability, and optimal performance for this reusable React utility library published to npm.

## 2. ⚠️ CRITICAL: React Utility Library Scope

**THIS IS A REACT UTILITY LIBRARY REPOSITORY. All development activities must focus on creating reusable, tree-shakeable hooks and utilities for React applications.**

### 2.1. Repository Scope Definition:

- **Utility Library**: Reusable React hooks and utility functions
- **npm Package**: Published to npm for consumption by React applications
- **TypeScript-First**: Comprehensive type definitions with strict typing
- **Build Tool**: Vite configured for library mode (ESM + CJS)
- **Distribution**: Dual format distribution with TypeScript declarations
- **Minimal Dependencies**: Small runtime footprint with peer dependencies
- **React Version**: Requires React ^19.2.0 and React DOM ^19.2.0

### 2.2. Explicitly Out of Scope:

- Full React applications or boilerplates
- UI component libraries or design systems
- Backend services or API implementations
- State management solutions (no Redux, Zustand, etc.)
- Routing libraries or page components
- Application-specific business logic

## 3. Core Principles

These rules establish a **library-focused, documentation-driven, modular development approach** that ensures reusability, maintainability, and optimal bundle impact for consuming applications. This workspace provides essential React hooks and utility functions organized by category.

> 📁 **For navigation and folder overview**, see [`../documents/index.md`](../documents/index.md)

### 3.1. Library Development Approach

**All development activities must focus on creating reusable, well-documented utilities that minimize bundle impact.**

- **Tree-Shaking Focus**: Each export must be independently importable
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Zero Configuration**: Utilities work out of the box with minimal setup
- **Peer Dependencies**: React as peer dependency to avoid version conflicts
- **Performance First**: Optimize for minimal runtime overhead

### 3.2. Documentation as Critical Infrastructure

In a utility library, documentation enables proper usage and adoption:

- **API Documentation**: Clear function signatures and parameter descriptions
- **Usage Examples**: Practical examples showing real-world usage
- **Type Definitions**: Comprehensive TypeScript types with JSDoc
- **Migration Guides**: Document breaking changes and upgrade paths

### 3.3. Modular Thinking

Every development decision must consider:

- **Import Granularity**: Can this be imported independently?
- **Bundle Impact**: How does this affect consumer bundle sizes?
- **API Stability**: Will this API remain stable across versions?
- **Type Safety**: Are all edge cases covered in types?

## 4. 🔥 Critical Rules (ALWAYS Follow)

### 4.1. Build Validation Before Code Task Completion

**ALWAYS run build to verify no errors before completing code-related tasks:**

- **Code Tasks Only**: Execute `npm run build` before marking any **code implementation task** as complete
- **Documentation Tasks Excluded**: Pure documentation tasks (writing docs, updating guides) do not require build validation
- **Error Resolution**: If build fails, immediately investigate and fix all compilation errors
- **Type Safety**: Ensure TypeScript compilation passes without errors or warnings
- **Bundle Verification**: Confirm library build generates ESM, CJS, and type definitions
- **Dependency Check**: Verify all imports resolve correctly

**Tasks Requiring Build Validation:**

- Hook implementation or modification
- Utility function creation or updates
- Type definition changes
- Export structure modifications
- Dependency updates
- Build configuration changes

**Tasks NOT Requiring Build Validation:**

- Pure documentation writing or updates
- README updates
- Example code in documentation
- Guidelines and process documentation

**Build Validation Process:**

1. Run `npm run lint` to ensure code quality standards
2. Execute `npm run build` to verify library compilation
3. Check `dist/` folder contains: `.es.js`, `.cjs`, and `index.d.ts` files
4. If any step fails, stop work and resolve errors immediately
5. Never commit code that doesn't pass the complete build process

**Critical Build Commands:**

- `npm run lint`: Code quality verification
- `npm run build`: Library build verification (tsc + vite build)

### 4.2. Documentation-First Development

**ALWAYS document first, for every task:**

- **Scan existing documents** in `.ai/documents/` before starting any task
- **Use relevant information** from existing documentation and update with latest requirements
- **If no relevant documents exist**, write documentation before coding
- **Update documentation** as requirements evolve during development
- **Consider package consumers** when documenting features

**Implementation Process:**

1. Search `.ai/documents/` for relevant existing documentation
2. Review and analyze existing content for applicability
3. Update existing documents OR create new ones as needed
4. Consider impact on package API and consumer experience
5. Proceed with implementation only after documentation is complete

### 4.3. Critical Documentation Review

**BE CRITICAL AND STRICT on all documents:**

- **Quality Control**: Every document must meet high standards for clarity and completeness
- **Technical Accuracy**: Verify examples work with current React and TypeScript versions
- **Completeness Check**: Ensure all necessary information is included for library usage
- **Consistency Review**: Maintain consistent formatting and terminology
- **Library Alignment**: Ensure documentation aligns with utility library principles

**Critical Review Process:**

1. Review document for technical accuracy
2. Verify all code examples work with current library version
3. Check cross-references and ensure all links work
4. Validate that document serves its intended purpose
5. Update or reject documents that don't meet quality standards

## 5. 🏗️ Library Architecture Rules

### 5.1. Modular Organization

**ALWAYS maintain clear category boundaries:**

- **Evaluate placement**: Does this belong in hooks/ or utils/?
- **Category organization**: Group related functionality together
- **Export strategy**: Each category has its own index.ts barrel export
- **Tree-shaking support**: Ensure utilities can be imported independently
- **Documentation**: Clear documentation of each category's purpose

**Organization Decision Framework:**

1. **Identify type**: Is this a React hook or pure utility?
2. **Find category**: Which category does this logically belong to?
3. **Check existing**: Does similar functionality already exist?
4. **Plan exports**: How will this be exported and imported?
5. **Document**: Add comprehensive JSDoc documentation

### 5.2. API Stability Management

**ALWAYS maintain stable public APIs:**

- **Semantic versioning**: Follow semver for version numbers
- **Deprecation warnings**: Add deprecation notices before removing features
- **Migration guides**: Provide clear upgrade paths for breaking changes
- **Type safety**: Maintain backward compatibility in type definitions
- **Documentation**: Document all API changes in CHANGELOG

**API Change Guidelines:**

1. **Minor changes**: New features, new parameters (with defaults)
2. **Patch changes**: Bug fixes, documentation updates
3. **Major changes**: Breaking changes, removed features
4. **Deprecation period**: Warn for at least one minor version
5. **Communication**: Document changes thoroughly

## 6. 📋 Code Quality Standards

**ALWAYS maintain high code quality across the library:**

- **Consistent patterns**: Use consistent patterns across all utilities
- **TypeScript strict mode**: Maintain strict TypeScript settings
- **Type safety**: Comprehensive type definitions with generics where appropriate
- **Bundle monitoring**: Regular checks on library bundle size
- **Performance**: Optimize for minimal runtime overhead

**Quality Assurance Process:**

1. **Code review**: All changes reviewed for quality and API design
2. **Type checking**: Strict TypeScript enforcement
3. **Documentation**: All exports must have JSDoc comments
4. **Examples**: Usage examples for all public APIs
5. **Build verification**: Must pass build before merging

## 7. Related Guidelines

For detailed guidelines on specific development processes, refer to:

- **PRD Creation**: See `.ai/documents/guidelines/1-create-prd.md`
- **Task Generation**: See `.ai/documents/guidelines/2-generate-tasks.md`
- **Task Management**: See `.ai/documents/guidelines/3-process-task-list.md`

---

**Remember**: These core rules form the foundation of our library development approach. They ensure that we maintain a high-quality, performant, and well-documented utility library that serves React developers effectively. Every decision should be evaluated against these principles to ensure we're building utilities that are reusable, maintainable, and provide excellent developer experience.
