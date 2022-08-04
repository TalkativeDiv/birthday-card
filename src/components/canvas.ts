import { fabric } from 'fabric'
const url =
  'https://cdn.dribbble.com/users/514825/screenshots/7479266/media/a93f9a3547eb07c92103967f6b6d6231.jpg?compress=1&resize=400x300'
const c = new fabric.Canvas('c')
let bgObj: fabric.Image
const loadImg = () => {
  fabric.Image.fromURL(url, img => {
    bgObj = img as fabric.Image
    bgObj.scaleToWidth(800)
    bgObj.scaleToHeight(600)
    bgObj.set({
      top: 0,
      left: 0,
    })
    c.add(bgObj)
  })
}
export default loadImg
