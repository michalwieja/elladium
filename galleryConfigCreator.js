const fs = require('fs')

const path = require('path')
const galleries = [{
  id: '1',
  title: 'Rodzinna sesja w plenerze Tychy'
}, {
  id: '2',
  title: 'Bajkowy ślub w Głuchołazach'
}, {
  id: '3',
  title: 'Domowa sesja noworodkowa w Katowicach'
}]
const res = galleries.map((gallery) => {
  const p = path.join(process.cwd(), 'static', 'gallery', gallery.id)
  const files = fs.readdirSync(p)
  return {
    id: gallery.id,
    title: gallery.title,
    files
  }
})

fs.writeFileSync('galleryConfig.json', JSON.stringify(res))
