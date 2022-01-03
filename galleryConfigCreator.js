const fs = require('fs')

const path = require('path')
const galleries = [{
  id: '1',
  title: 'Rodzinna sesja w plenerze Tychy',
  type: 'Sesja w plenerze',
  date: '15-10-2018',
  cover: '8D1A3327-2.jpg'

}, {
  id: '2',
  title: 'Bajkowy ślub w Głuchołazach',
  type: 'Sesja ślubna',
  date: '13-9-2020',
  cover: '8D1A1128.jpg'

}, {
  id: '3',
  title: 'Domowa sesja noworodkowa w Katowicach',
  type: 'Sesja noworodkowa',
  date: '05-12-2021',
  cover: '8D1A5340.jpg'

}]
const res = galleries.map((gallery) => {
  const p = path.join(process.cwd(), 'static', 'gallery', gallery.id)
  const files = fs.readdirSync(p)
  return {
    ...gallery,
    files
  }
})

fs.writeFileSync('galleryConfig.json', JSON.stringify(res))
