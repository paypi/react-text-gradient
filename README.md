# React-Text-Gradient

A simple React component for awesome, animated or static text gradients. 

The library consists of a single component `Text` which when wrapped 
around text or a component containing text applies a gradient to it.

## Installation

Install it from npm: 

```npm install @carefully-coded/react-text-gradient```

Or with Yarn:

```yarn add @carefully-coded/react-text-gradient```

## Usage

### Static gradient text
Add a simple static gradient to your text: 

```TSX
import Text from 'react-text-gradient';
...
<Text gradient={{ from: '#818CF8', to: '#5B21B6' }}>Some fancy text</Text>
```

### Animated gradient text
Add the `animateTo` prop to apply a gradient. The animation will automatically reverse when it finishes and continue in a loop. Make sure to not set the same
prop for `animateTo` and `gradient` or you will animate between the same color (i.e nothing will happen)

```TSX
import Text from 'react-text-gradient';

<Text 
  gradient={{ from: '#818CF8', to: '#5B21B6' }} 
  animateTo={{ to: '#818CF8', from: '#5B21B6' }} 
  animationDuration={4000}
>
  Some fancy animated text
</Text>
```

### Enclosing tags
Any text inside of the component will have a gradient added, so it's easy just to add a gradient by wrapping existing components. 

```TSX
import Text from 'react-text-gradient';

<Text 
  gradient={{ from: '#818CF8', to: '#5B21B6' }} 
  animateTo={{ to: '#818CF8', from: '#5B21B6' }} 
  animationDuration={4000}
>
  <h1>Large gradient text</h1>
</Text>
```

### Linear gradient
Gradients are radial by default (we think this looks better most of the time). Set `radial` to `false` to create a linear gradient. 

When adding a linear gradient, add a `degree` to pick what direction the gradient should be in - this defaults to `90`. 
```TSX
import Text from 'react-text-gradient';

<Text 
  gradient={{ from: '#818CF8', to: '#5B21B6', radial: false, degree: 90 }} 
  animateTo={{ to: '#818CF8', from: '#5B21B6', radial: false, degree: 120 }} 
  animationDuration={4000}
>
Some fancy text with a linear gradient
</Text>
```

### Adding styles directly
Styles can be added to the text directly by specifying a `style` or `className` prop. **Note** that any `background` css attribute may be overwritten 
due to the applied gradient. 
```TSX
import Text from 'react-text-gradient';

<Text 
  style={{fontSize: '20px'}}
  gradient={{ from: '#818CF8', to: '#5B21B6' }} 
  animateTo={{ to: '#818CF8', from: '#5B21B6' }} 
  animationDuration={4000}
>
  Text with specific font size
</Text>
```

## `<Text />` Props

```Typescript
type Gradient = {
  radial?: boolean;
  from?: string;
  to?: string;
  degree?: number;
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  gradient: Gradient;
  animateTo?: Gradient;
  animateDuration?: number;
}
```

| Prop Name   | Type        | Default       | Description       |
| ---        |    ----   |   ----   |        --- |
| `gradient`  | `Gradient`       | `undefined`   | Starting gradient |
| `animateTo`  | `Gradient`       | `undefined`   | Gradient to animate to |
| `animateDuration`  | `number`       | `4000`   | Duration of animation in ms  |
