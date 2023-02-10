# Skeleton React

easy to use library for skeleton loading.

<table>
    <tr>
        <td>
            <img src="https://user-images.githubusercontent.com/43598980/218112412-ad0f7791-af2c-4a51-8c2b-e06ad3856554.gif"/>
        </td>
        <td>
            <img src="https://user-images.githubusercontent.com/43598980/218112529-eae68d59-d3f3-40d9-94a9-56ed0bbf0cfa.gif"/>
        </td>
        <td>
            <img src="https://user-images.githubusercontent.com/43598980/218112477-91930798-ee5e-42f3-ad48-556eba3062ab.gif"/>
        </td>
    </tr>
</table>



<Br/>
<Br/>

## installation

Using npm:

```
$ npm i @shayan-mirzaie/skeleton-react
```

Using yarn:

```
$ yarn add @shayan-mirzaie/skeleton-react
```

## Usage

simply import the package

```
import Skeleton from "@shayan-mirzaie/skeleton-react";
```

then use `<Skeleton>` component to see the result :

```
<Skeleton>
    <Skeleton.Circle></Skeleton.Circle>
    <Skeleton.Rect></Skeleton.Rect>
    <Skeleton.Rect width="75%"></Skeleton.Rect>
</Skeleton>
```

## Api

| name | description | props | children | 
|--------|--------------------------------------------|------------------|----------|
| Skeleton | wrapper component of library | enable `boolean` <br/> dir `rtl\|ltr` | YES |
| Skeleton.Rect | show rectangle shape | height `string ex: 20px` <br/> width `string ex: 20px` <br/> margin `string ex: 20px` <br/> full `boolean` <br/> onClick `callback function` |
| Skeleton.Square | show square shape | width `string ex: 20px` <br/> margin `string ex: 20px` <br/> onClick `callback function` |
| Skeleton.Cirlce | show cirlce shape | radius `string ex: 20px` <br/> margin `string ex: 20px` <br/> onClick `callback function` |
| Skeleton.Row | show children item in a row | alignItems `center\|start\|end\|baseline` <br/> justifyContent `center\|start\|end\|space-around\|space-between` <br/> onClick `callback function` | YES |
| Skeleton.Col | show children item in a column | alignItems `center\|start\|end\|baseline` <br/> justifyContent `center\|start\|end\|space-around\|space-between` <br/> onClick `callback function` | YES |
| Skeleton.Center | show children item center | onClick `callback function` | YES |
| Skeleton.List | iterate children item to show a list | count `number` | YES |



















