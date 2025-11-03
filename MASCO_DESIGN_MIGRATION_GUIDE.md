# Masco Design System Migration Guide
## GMG Financial Services Website

This guide outlines how to migrate your existing GMG Financial Services website to use the Masco design system while preserving your brand colors and copy.

---

## ✅ COMPLETED

### 1. Tailwind Config Updates
**File**: `tailwind.config.js`

Added Masco design tokens:
- ✅ Poppins font family
- ✅ Masco color variables (ColorBlack, ColorOffWhite, ColorLime, ColorPurple)
- ✅ Letter spacing `tighter: -0.06em`
- ✅ Kept your teal brand colors (#7CC5C5, #6BB5B5)

---

## 🎨 DESIGN SYSTEM MAPPING

### Color Mapping: Masco → GMG
| Masco Color | Your GMG Color | Usage |
|-------------|----------------|-------|
| ColorBlack (#121212) | Use sparingly | Dark text, borders |
| ColorLime (#C1FF00) | Map to teal-500 (#7CC5C5) | Primary CTAs |
| ColorPurple (#A259FF) | Map to teal-600 (#6BB5B5) | Secondary accents |
| ColorOffWhite (#FDFBF9) | Keep as alternate bg | Section backgrounds |

**Recommendation**: Keep Masco structure but swap their lime/purple for your teal shades.

---

## 📝 IMPLEMENTATION CHECKLIST

### Phase 1: Core Components (HIGH PRIORITY)

#### A. Button Component
**File to update**: `src/components/ui/Button.tsx`

**Changes needed**:
```tsx
// Add Masco variants while keeping teal as primary
- Keep existing teal variants
- Add: rounded="small" (3px), rounded="full" (50px)
- Add: animated prop for hover effects
- Update padding: px-8 py-3 xl:px-10 xl:py-4
- Add letter-spacing: -0.06em
```

**Keep GMG Colors**:
- Primary: `bg-teal-500` instead of `bg-ColorLime`
- Secondary: `bg-teal-600` instead of `bg-ColorPurple`

#### B. Form Components
**Files to create/update**:
1. `src/components/ui/Input.tsx`
2. `src/components/ui/Textarea.tsx`
3. `src/components/ui/Select.tsx`
4. `src/components/ui/Label.tsx`

**Masco Form Pattern**:
```tsx
// Standard input styling
<input className="
  w-full
  px-[30px] py-[15px]
  rounded-full
  border border-ColorBlack/50
  focus:border-teal-500  // YOUR COLOR
  placeholder:text-ColorBlack/50
  transition-all duration-300
" />
```

#### C. Card Component
**File**: `src/components/ui/card.tsx`

**Updates**:
```tsx
// Masco card pattern
<div className="
  rounded-[5px]
  border-2 border-ColorBlack
  bg-white
  p-7 xl:p-10
  hover:shadow-lg
  transition-all duration-300
">
```

### Phase 2: Layout Components

#### D. Navigation
**File**: `src/components/layout/Navigation.tsx`

**Changes**:
- Simplify to match Masco header
- Add backdrop-blur-sm
- Update logo area
- Font-weight: font-semibold for links
- Hover: text-teal-500 (your color)

**Desktop Nav Pattern**:
```tsx
<nav className="hidden lg:flex items-center gap-8">
  {links.map(link => (
    <a className="text-base font-semibold text-ColorBlack hover:text-teal-500 transition-colors">
      {link.name}
    </a>
  ))}
</nav>
```

#### E. Footer
**File**: `src/components/layout/Footer.tsx`

**Masco Footer Structure**:
- Background: `bg-ColorBlack`
- Text: `text-white/80`
- Grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)]`
- Links hover: `hover:text-teal-400` (your accent)
- Bottom bar: `bg-white/10 py-[18px]`

### Phase 3: Sections

#### F. Hero Section
**File**: `src/components/sections/HeroSection.tsx`

**Masco Hero Pattern**:
```tsx
<section className="pt-[105px] sm:pt-[145px] lg:pt-[185px]">
  <div className="container-default">
    <h1 className="
      font-Poppins
      text-5xl md:text-[60px] lg:text-[70px] xl:text-[90px]
      font-bold
      leading-[1.1]
      tracking-tighter
      text-ColorBlack
      mb-6
    ">
      {title}
    </h1>
    <p className="text-lg text-ColorBlack/80 mb-8 lg:mb-[50px]">
      {description}
    </p>
    <div className="flex gap-[18px]">
      <Button variant="teal" size="large" rounded="small" animated>
        Get Started
      </Button>
      <Button variant="outline" size="large" rounded="small">
        Learn More
      </Button>
    </div>
  </div>
</section>
```

#### G. Services Section
**File**: `src/components/sections/ServicesSection.tsx`

**Masco Card Grid**:
```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {services.map(service => (
    <div className="
      card
      rounded-[5px]
      border-2 border-ColorBlack
      p-7 xl:p-10
      hover:shadow-lg
      hover:-translate-y-2
      transition-all duration-300
    ">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-500 text-white">
        <Icon className="h-10 w-10" />
      </div>
      <h3 className="font-Poppins text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-ColorBlack/80 mb-6">{service.description}</p>
      <Button variant="outline-teal">Learn More</Button>
    </div>
  ))}
</div>
```

#### H. Contact Section
**File**: `src/components/sections/ContactSection.tsx`

**Masco Form Layout**:
```tsx
<form className="max-w-[996px] mx-auto space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" />
    </div>
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
    </div>
  </div>
  <div>
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" rows={5} />
  </div>
  <Button variant="teal" size="large" rounded="small" className="w-full">
    Send Message
  </Button>
</form>
```

---

## 🎯 SPACING SYSTEM

### Container
```css
.container-default {
  @apply max-w-[1400px] mx-auto px-4 sm:px-8 md:px-10 lg:px-8 xl:px-10 xxl:px-[50px];
}
```

### Section Spacing
```css
.section-space {
  @apply py-20 lg:py-[100px] xl:py-[120px];
}

.section-space-bottom {
  @apply pb-20 lg:pb-[100px] xl:pb-[120px];
}
```

### Common Gaps
- Form fields: `gap-6` (24px)
- Card grids: `gap-6` or `gap-8`
- Button groups: `gap-[18px]`
- Navigation: `gap-8`

---

## 🔤 TYPOGRAPHY SYSTEM

### Headings (Use Poppins)
```tsx
// H1 - Hero
className="font-Poppins text-5xl md:text-[60px] lg:text-[70px] xl:text-[90px] font-bold leading-[1.1] tracking-tighter"

// H2 - Section
className="font-Poppins text-4xl lg:text-5xl xl:text-[56px] font-bold leading-[1.2]"

// H3 - Card Title
className="font-Poppins text-xl font-bold leading-[1.4]"
```

### Body (Keep Inter)
```tsx
// Paragraph
className="text-lg leading-[1.66] text-ColorBlack/80"

// Small text
className="text-base text-ColorBlack/80"
```

---

## 🎨 BORDER & RADIUS SYSTEM

### Borders
- Standard: `border-2 border-ColorBlack`
- Subtle: `border border-ColorBlack/50`
- Focus: `focus:border-teal-500`

### Border Radius
- Small buttons/elements: `rounded-[3px]`
- Cards: `rounded-[5px]` or `rounded-[10px]`
- Inputs: `rounded-full` (50px)
- Textareas: `rounded-[30px]`

---

## 🎭 ANIMATION PATTERNS

### Hover Effects
```tsx
// Cards
className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2"

// Buttons
className="transition-all duration-300 hover:scale-105"

// Links
className="transition-colors duration-300 hover:text-teal-500"
```

### Scroll Animations (Keep Framer Motion)
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

---

## 📱 RESPONSIVE BREAKPOINTS

Match Masco system:
- Mobile: default (< 640px)
- SM: 640px
- MD: 768px
- LG: 992px
- XL: 1200px
- XXL: 1400px

---

## 🔧 QUICK WINS (Do These First)

1. **Update Button Component** (30 min)
   - Add Masco padding/rounded options
   - Keep teal colors
   - Add animated prop

2. **Create Form Components** (1 hour)
   - Input, Textarea, Select, Label
   - Use Masco styling with teal focus states

3. **Update Card Styling** (30 min)
   - Border-2 border-ColorBlack
   - Rounded-[5px]
   - Hover effects

4. **Update Section Spacing** (30 min)
   - Apply .section-space class
   - Update container padding

5. **Typography Updates** (45 min)
   - Add Poppins to headings
   - Update font sizes to Masco scale
   - Keep Inter for body

---

## ⚠️ IMPORTANT NOTES

### Keep Your Brand Identity
- **Primary Color**: Teal (#7CC5C5) - Don't change this
- **Copy**: Keep all your existing text
- **Services**: Keep your 6 financial services
- **Social Proof**: Keep your stats (20+ years, 500+ clients, etc.)

### Adapt from Masco
- **Layout patterns**: Spacing, grids, structure
- **Component styling**: Borders, shadows, shapes
- **Typography hierarchy**: Font sizes, weights
- **Animation patterns**: Hover effects, transitions

### Don't Copy Blindly
- Their lime (#C1FF00) → Your teal (#7CC5C5)
- Their purple (#A259FF) → Your teal-600 (#6BB5B5)
- Their copy → Keep yours
- Their images → Keep yours

---

## 🚀 MIGRATION WORKFLOW

### Day 1: Foundation
1. ✅ Update Tailwind config (Done)
2. Load Poppins font
3. Update Button component
4. Create form components

### Day 2: Core Sections
1. Update Navigation
2. Update Hero Section
3. Update Services Section
4. Update Contact forms

### Day 3: Polish
1. Update Footer
2. Apply spacing consistency
3. Test responsive breakpoints
4. Fix any remaining issues

### Day 4: Testing
1. Cross-browser testing
2. Mobile testing
3. Accessibility check
4. Performance audit

---

## 📚 REFERENCE FILES

Your existing structure is good. Just update styling:

### Keep These Files (Update Styling)
- ✅ `src/components/ui/Button.tsx` - Add Masco variants
- ✅ `src/components/layout/Navigation.tsx` - Simplify
- ✅ `src/components/layout/Footer.tsx` - Update structure
- ✅ `src/components/sections/*.tsx` - Update card styling

### Create These Files
- `src/components/ui/Input.tsx` - Masco input component
- `src/components/ui/Textarea.tsx` - Masco textarea
- `src/components/ui/Select.tsx` - Masco select
- `src/components/ui/Label.tsx` - Masco label

---

## 💡 TIPS FOR SUCCESS

1. **Work Section by Section** - Don't try to update everything at once
2. **Test as You Go** - Check each component before moving on
3. **Keep Existing Classes** - Add new ones alongside, remove old ones last
4. **Use Git Branches** - Easy to revert if something breaks
5. **Check Mobile First** - Masco is mobile-first, yours is too

---

## 🎯 SUCCESS CRITERIA

Your migration is complete when:
- ✅ All sections use Masco spacing patterns
- ✅ Headings use Poppins font
- ✅ Cards have border-2 border-ColorBlack styling
- ✅ Forms use pill-shaped inputs
- ✅ Buttons have Masco sizing/padding
- ✅ Teal colors are preserved throughout
- ✅ All copy remains unchanged
- ✅ Build passes without errors
- ✅ Responsive on all breakpoints
- ✅ Animations work smoothly

---

**Good luck with your migration! The Masco design system will give your site a modern, professional look while keeping your GMG brand identity intact.**
