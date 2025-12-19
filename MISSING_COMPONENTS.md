# Missing Component Guidelines

Danh sách các components chưa có guidelines trong Design System.

## Tổng quan

- **Tổng số components**: 71
- **Đã có guidelines**: 29
- **Còn thiếu**: 42

## Components đã có guidelines ✅

1. accordion
2. alert
3. avatar
4. badge
5. breadcrumb
6. button
7. calendar
8. card
9. checkbox
10. combobox
11. data-table
12. dialog
13. dropdown-menu
14. input
15. label
16. pagination
17. popover
18. progress
19. radio-group
20. select
21. separator
22. skeleton
23. slider
24. switch
25. table
26. tabs
27. textarea
28. toast
29. tooltip

## Components còn thiếu theo category

### Form Components (3/13 thiếu)

- ✅ button
- ✅ input
- ✅ textarea
- ✅ select
- ✅ checkbox
- ✅ switch
- ✅ **radio-group**
- ✅ **combobox**
- ✅ **slider**
- ✅ **calendar**
- ❌ **input-otp**
- ❌ **form**

### Layout Components (2/8 thiếu)

- ✅ card
- ❌ **container**
- ❌ **stack**
- ❌ **grid**
- ✅ **separator**
- ❌ **divider**
- ❌ **resizable**
- ❌ **aspect-ratio**

### Feedback Components (4/12 thiếu)

- ✅ alert
- ✅ **toast**
- ✅ **dialog**
- ❌ **alert-dialog**
- ❌ **confirm-dialog**
- ❌ **delete-confirm-dialog**
- ✅ **progress**
- ✅ **skeleton**
- ❌ **spinner**
- ❌ **loading-button**
- ❌ **loading-state**
- ❌ **empty-state**
- ❌ **error-boundary**

### Data Display Components (4/6 thiếu)

- ✅ badge
- ✅ data-table
- ✅ **table**
- ❌ **status-badge**
- ✅ **avatar**
- ❌ **chart**

### Navigation Components (3/6 thiếu)

- ✅ **tabs**
- ❌ **sidebar**
- ✅ **breadcrumb**
- ✅ **pagination**
- ❌ **menubar**
- ❌ **navigation-menu**

### Overlay Components (3/7 thiếu)

- ✅ **popover**
- ✅ **tooltip**
- ✅ **dropdown-menu**
- ❌ **context-menu**
- ❌ **hover-card**
- ❌ **sheet**
- ❌ **drawer**

### Media Components (0/1 thiếu)

- ❌ **carousel**

### Other Components (2/11 thiếu)

- ✅ **accordion**
- ❌ **collapsible**
- ❌ **toggle**
- ❌ **toggle-group**
- ❌ **scroll-area**
- ✅ **label**
- ❌ **kbd**
- ❌ **command**
- ❌ **empty**
- ❌ **field**
- ❌ **item**
- ❌ **input-group**
- ❌ **button-group**

## Cách tạo guidelines cho component mới

1. Tạo folder: `src/pages/components/components/[component-name]/`
2. Tạo 3 files:
   - `index.tsx` - Overview, description, basic usage
   - `examples.tsx` - Multiple usage examples
   - `props.tsx` - API documentation

3. Tham khảo các components đã có sẵn như `button`, `input`, `card` để làm mẫu.

## Priority Components (Nên làm trước)

### High Priority ✅ (Đã hoàn thành)
- ✅ **toast** - Đã có trong Design System nhưng chưa có guidelines
- ✅ **dialog** - Component quan trọng
- ✅ **tabs** - Component thường dùng
- ✅ **combobox** - Component form quan trọng
- ✅ **radio-group** - Component form cơ bản

### Medium Priority ✅ (Đã hoàn thành)
- ✅ **table** - Basic table component
- ✅ **pagination** - Thường dùng với table
- ✅ **popover** - Overlay component phổ biến
- ✅ **tooltip** - Overlay component phổ biến
- ✅ **accordion** - Component thường dùng

### Remaining Priority Components
- **form** - Form wrapper component
- **input-otp** - OTP input component
- **container**, **stack**, **grid** - Layout components
- **divider** - Layout separator
- **alert-dialog**, **confirm-dialog**, **delete-confirm-dialog** - Dialog variants
- **spinner**, **loading-button**, **loading-state**, **empty-state**, **error-boundary** - Loading/state components
- **status-badge** - Badge variant
- **sidebar**, **menubar**, **navigation-menu** - Navigation components
- **context-menu**, **hover-card**, **sheet**, **drawer** - Overlay components
- **carousel** - Media component
- **collapsible**, **toggle**, **toggle-group**, **scroll-area** - Interactive components
- **kbd**, **command** - Utility components
- **empty**, **field**, **item**, **input-group**, **button-group** - Helper components
- **chart** - Complex data visualization component

## Summary

### Đã hoàn thành (29 components)
Đã tạo guidelines cho 29 components quan trọng và phổ biến nhất, bao gồm:
- Tất cả Form components cơ bản (button, input, textarea, select, checkbox, switch, radio-group, combobox, slider, calendar)
- Các Feedback components chính (alert, toast, dialog, progress, skeleton)
- Các Data Display components (badge, data-table, table, avatar)
- Các Navigation components chính (tabs, breadcrumb, pagination)
- Các Overlay components phổ biến (popover, tooltip, dropdown-menu)
- Các Other components quan trọng (accordion, label, separator)

### Còn lại (42 components)
Các components còn lại chủ yếu là:
- Layout components (container, stack, grid, divider, resizable, aspect-ratio)
- Dialog variants (alert-dialog, confirm-dialog, delete-confirm-dialog)
- Loading/State components (spinner, loading-button, loading-state, empty-state, error-boundary)
- Navigation components (sidebar, menubar, navigation-menu)
- Overlay components (context-menu, hover-card, sheet, drawer)
- Utility components (kbd, command, collapsible, toggle, toggle-group, scroll-area)
- Helper components (empty, field, item, input-group, button-group)
- Complex components (chart, carousel)
- Form components (form, input-otp)

