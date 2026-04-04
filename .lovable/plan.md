

## Product Catalog Redesign

### What changes
Replace the current alternating left-right product layout (3 products) with a **catalog-style grid** showing all 6 products, plus a shared "Directions to Use" note and the playful message.

### Layout
- **Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile
- Each product is a card with: image, name, short description, ingredients list, weight
- Cards have a subtle hover effect (scale + shadow lift), rounded corners, no boxy borders
- Below the grid: a "Directions to Use" section with the fun message

### Products (6 total)
1. **Sandal Bloom** — existing image + description
2. **Roselia** — existing image + description  
3. **Gandhamala** — existing image + description
4. **Aloe Calm** — needs placeholder image (will use existing soap asset or generate one), new ingredients
5. **Lemo Pure** — needs placeholder image, new ingredients
6. **Charcoal Burst** — needs placeholder image (soap-3.jpg looks like charcoal, could reuse), no ingredients listed yet

### Technical details

**File: `src/components/ProductsSection.tsx`** — Full rewrite:
- Expand products array to 6 items with new entries for Aloe Calm, Lemo Pure, Charcoal Burst
- Replace `space-y-20` alternating layout with a responsive CSS grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)
- Each card: image on top (aspect-square, rounded-2xl), name, description, ingredients, weight below
- Hover: `group-hover:scale-105` on image, `hover:shadow-xl` on card
- Add a "Directions to Use" section after the grid with the playful text
- For products without images yet, use a placeholder from existing assets or the `/public/placeholder.svg`

### Image assignment
- Sandal Bloom → `product-sandal-bloom.jpeg`
- Roselia → `product-roselia.jpeg`
- Gandhamala → `product-gandhamala.jpeg`
- Aloe Calm → `soap-1.jpg` (temporary until real image provided)
- Lemo Pure → `label-lemon.jpeg` (temporary)
- Charcoal Burst → `soap-3.jpg` (temporary)

### Missing info needed
- Charcoal Burst has no ingredients or description listed — I'll write a placeholder description and mark ingredients as TBD, or leave it minimal. 

