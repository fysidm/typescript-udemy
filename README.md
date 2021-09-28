# typescript-udemy

## Udemy - Typescript: The Complete Developer's Guide

## Notes:

### Create tsconfig.json

```
tsc --init
```

#### Run tsc with tsconfig.json

```
tsc
```

#### TSC watch mode

```
tsc -w
```

### Generate .js from .ts

```
tsc index.ts
```

### Run .ts

```
ts-node index.ts
```

#### **Error: Cannot find module '@types/node/package.json'**

```
npm install -D tslib @types/node
```

### Run .ts in browser with Parcel

```
parcel index.html
```
