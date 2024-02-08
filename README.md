# Starry Night 

## Overview

Starry Night is a Sass utility library inspired by Vincent van Gogh's Starry Night.
## Installation

You can install Wookiee Style Sass via npm:

```bash
npm install starry-night-css
```

# CSS Utilities Documentation

This documentation provides an overview of the CSS utilities generated from SASS mixins and functions.

## Padding and Margin Utilities

### Padding

- `.p-0`: Sets padding to 0.
- `.p-1` to `.p-5`: Sets padding in incremental steps.
- `.px-0` and `.py-0` to `.px-5` and `.py-5`: Sets padding on the x-axis (horizontal) and y-axis (vertical).
- `.pl-0` to `.pl-5`: Sets padding on the left.
- `.pr-0` to `.pr-5`: Sets padding on the right.
- `.pt-0` to `.pt-5`: Sets padding on the top.
- `.pb-0` to `.pb-5`: Sets padding on the bottom.

### Margin

- `.m-0`: Sets margin to 0.
- `.m-1` to `.m-5`: Sets margin in incremental steps.
- `.mx-0` and `.my-0` to `.mx-5` and `.my-5`: Sets margin on the x-axis (horizontal) and y-axis (vertical).
- `.ml-0` to `.ml-5`: Sets margin on the left.
- `.mr-0` to `.mr-5`: Sets margin on the right.
- `.mt-0` to `.mt-5`: Sets margin on the top.
- `.mb-0` to `.mb-5`: Sets margin on the bottom.

## Opacity

- `.o-10` to `.o-100`: Sets opacity in incremental steps.

## Border Radius

- `.br-none`: Sets border radius to 0.
- `.br-1` to `.br-full`: Sets border radius in various sizes.

## Box Shadow

- `.shadow-none`: Sets box shadow to none.
- `.shadow-1` to `.shadow-4`: Sets box shadow in various sizes.
- `.shadow-inner`: Sets box shadow inset.

## Display

- `.d-n`: Sets display to none.
- `.d-b`, `.d-i`, `.d-i-b`: Sets display to block, inline, or inline-block, respectively.
- `.d-f`: Sets display to flex respectively.

## Position

- `.p-static`: Sets postion to static.
- `.p-absolute`: Sets postion to absolute.
- `.p-relative`: Sets postion to reative.
- `.p-fixed`: Sets postion to fixed.
- `.p-sticky`: Sets postion to sticky.

## Font Size

- `.font-sm` to `.font-xxl`: Sets font size in various sizes.

## Font Weight

- `.fw-light` to `.fw-bolder`: Sets font weight in various weights.

## Width and Height

- `.w-25`, `.w-50`, `.w-75`, `.w-100`: Sets width in percentage increments.
- `.h-25`, `.h-50`, `.h-75`, `.h-100`: Sets height in percentage increments.

## Alignment

- `.justify-center`, `.justify-flex-end`, `.justify-flex-start`, `.justify-space-between`, `.justify-space-around`: Justify content horizontally at center, end, start, space-between or space-around respectively.
- `.align-items-center`, `.align-items-end`, `.align-items-start`, `.align-items-baseline`, `.align-stretch`: Aligns items vertically at center, end, start, baseline or stretch respectively.

## Breakpoints

- `.utility-breakpoints-value`: Sets utility to value based on breakpoints.

### Size

- `.utility-xs-value`: Sets utility to value from 0px.
- `.utility-sm-value`: Sets utility to value from 576px.
- `.utility-md-value`: Sets utility to value from 768px.
- `.utility-lg-value`: Sets utility to value from 992px.
- `.utility-xl-value`: Sets utility to value from 1200px.
- `.utility-xxl-value`: Sets utility to value from 1400px.

# Container Documentation

## Container Styles

Containers provide a structured layout for content. Different container sizes are defined based on breakpoints for responsive design.

# Color and Button Documentation

## Color Styles

Colors are defined for various elements such as text, backgrounds, and buttons.

### Text Colors

- `.text-primary`
- Color: #3182CE

- `.text-light`
- Color: #F4F6F7

- `.text-dark`
- Color: #222

- `.text-secondary`
- Color: #555

- `.text-success`
- Color: #35A810

- `.text-danger`
- Color: #C41837

- `.text-warning`
- Color: #E8B70F

- `.text-purple`
- Color: #6324EC

### Background Colors

- `.bg-primary`
- Color: #3182CE

- `.bg-light`
- Color: #F4F6F7

- `.bg-dark`
- Color: #222

- `.bg-secondary`
- Color: #555

- `.bg-success`
- Color: #35A810

- `.bg-danger`
- Color: #C41837

- `.bg-warning`
- Color: #E8B70F

- `.bg-purple`
- Color: #6324EC

# Buttons

## Button Styles

- `.btn-solid-color`
- Background with color and 5% darken hover effect

- `.btn-outline-color`
- Text and border with color and hover effect with background color

- `.btn-ghost-color`
- Only text with color and hover effect with lighten color

- `.btn-link-color`
- Only text with color and hover effect with underline

## Button Size

- `.btn-xs` to `.btn-xxl`: Sets button size in various sizes.