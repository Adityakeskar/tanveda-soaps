

## Merge Journey Section into Our Story

### What changes
Move the journey paragraph from `JourneySection.tsx` into `AboutSection.tsx` (the "Our Story" section), placing it between the introductory paragraph and the three feature icons. Then remove `JourneySection` from the page.

### Files to edit

**`src/components/AboutSection.tsx`**
- Insert the journey paragraph (italic, with highlighted keywords) after the existing "Born from a passion..." paragraph and before the features grid
- Add appropriate spacing (`mb-14`) to keep the layout clean

**`src/components/JourneySection.tsx`**
- Delete this file (no longer needed)

**`src/pages/Index.tsx`**
- Remove the `JourneySection` import and its usage from the page layout

