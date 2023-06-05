# reactjs-human-body

Build one Human Body figure inyour web Page using React.
Show the parts you want and click on them to select it.

![Human figure example](./example/screenshot.png)

See the [Live demo](https://stackblitz.com/edit/reactjs-human-body-example).


## How to use it

```tsx

import { BodyComponent } from 'reactjs-human-body';

const exampleParams = {
  head: { selected: true },
  left_arm: { show: false }
}

export const App: VFC = () => {
  const [params, setParams] = useState<any>();
  const onChange = (parts: PartsInput) => console.log('Changed Parts:', parts);
  const onClick = (id: string) => console.log('Changed Id:', id);
  return (<div>
      <BodyComponent partsInput={params} 
        onChange={onChange}
        onClick={onClick}
      />
    )}
  </div>
  )
}
```

## TODO

* Individual Protection Equipment (helmet...)

## Contribute:

To contribute check the [Contribute](./CONTRIBUTE.md).


Thanks to:
* https://github.com/volcanioo/Human-Body-Rendering-HTML