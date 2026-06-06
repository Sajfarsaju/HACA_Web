/** Matches design: width 247.656… × height 270 */
export const PLACEMENT_ASPECT_RATIO =
  247.6561737060547 / 270;

/** Same labels as `app/(marketing)/success-story/page.tsx` school groups */
export const PLACEMENT_SCHOOL_OPTIONS = [
  "Marketing School",
  "Design School",
  "Tech School",
  "UAE School",
] as const;

export type PlacementSchoolName = (typeof PLACEMENT_SCHOOL_OPTIONS)[number];
