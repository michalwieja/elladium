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
}, {
  id: '4',
  title: 'Naturalna sesja rodzinna - Mikołów',
  type: 'Sesja naturalna',
  date: '03-09-2020',
  cover: '8D1A9623.jpg'
},
{
  id: '5',
  title: 'Pierwsza Komunia - Dąbrowa Górnicza',
  type: 'Sesja komunijna',
  date: '27-06-2020',
  cover: '8D1A2301.jpg'
},
{
  id: '6',
  title: 'Domowa sesja noworodkowa - Mysłowice',
  type: 'Sesja noworodkowa',
  date: '24-05-2018',
  cover: '8D1A5679.jpg'
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
