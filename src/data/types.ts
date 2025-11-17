/**
 * Type definitions for people data used across the website
 */

/**
 * Represents a person with their profile information
 * Used in leadership, helpers, and achievements pages
 */
export interface Person {
  /** Full name of the person */
  name: string;

  /** Military rank or role title (e.g., "Captain", "INSTRUCTOR") */
  rank?: string;

  /** Portfolio/responsibility or year (for achievements) */
  portfolio?: string;

  /** Path to the person's photo (relative to /public) */
  photoSrc: string;

  /** Alt text for the photo (defaults to name if not provided) */
  photoAlt?: string;

  /** CSS object-position value for photo positioning (e.g., "object-top", "object-[60%_0%]") */
  photoPosition?: string;

  /** Tailwind scale class for photo sizing (e.g., "scale-110", "scale-120") */
  photoScale?: string;

  /** Tailwind rotation class for photo rotation (e.g., "-rotate-1", "rotate-2") */
  photoRotate?: string;
}

/**
 * Collection of people organized by category
 */
export interface PeopleCollection {
  /** Category name (e.g., "Leadership Team", "Founders Award Recipients") */
  category: string;

  /** Description of this group */
  description?: string;

  /** Array of people in this collection */
  people: Person[];

  /** Last updated timestamp */
  lastUpdated?: string;
}
