# UI Rules

## General Principles

- Every page should have one clear primary action.
- Keep layouts simple and uncluttered.
- Prefer reusable components over one-off implementations.
- Use consistent spacing and typography across the application.

---

## Layout

- Maximum content width: 1280px
- Center the main content.
- Use generous whitespace.
- Sidebar is fixed on desktop.
- Header remains visible.

---

## Cards

Every card must include:

- Rounded corners
- Consistent padding
- Soft shadow
- Clear title
- Optional description

Cards should never touch each other directly.

---

## Buttons

Primary

- Used for main actions.
- Full color.

Secondary

- Less emphasis.

Danger

- Only for destructive actions.

Loading

- Disable button while loading.
- Show spinner.

---

## Inputs

Every input must support:

- Label
- Placeholder
- Focus state
- Error message
- Disabled state

---

## Loading States

Never leave empty screens.

Use:

- Skeleton loaders
- Progress indicators
- Loading text

---

## Error States

Every API request should display:

- Friendly error message
- Retry action (where appropriate)

Avoid exposing raw errors.

---

## Empty States

Every page should have an empty state.

Example:

"No notes yet. Paste your first lecture note to get started."

---

## Responsive Design

Desktop first.

Tablet supported.

Mobile should remain usable but is not the primary focus for the hackathon.

---

## Accessibility

- Buttons must have accessible labels.
- Inputs should have labels.
- Keyboard navigation should work.
- Sufficient color contrast.

---

## Animations

Keep animations subtle.

- Fade in cards.
- Smooth hover transitions.
- Avoid long or distracting animations.

---

## AI Experience

AI responses should always show:

- Loading state
- Success state
- Error state

Never leave the user wondering if the request is still running.
