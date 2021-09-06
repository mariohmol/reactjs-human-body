# react-human-body

Build one Human Body figure inyour web Page using React.
Show the parts you want and click on them to select it.

![Human figure example](./example/screenshot.png)


## How to use it

```tsx
const exampleParams = {
  head: { selected: true },
  left_arm: { show: false }
}

export const App: VFC = () => {
  const [params, setParams] = useState<any>()
  return (<div>
      <BodyComponent partsInput={params} />
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