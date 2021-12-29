const fs = require('fs')

const path = require('path')
const galleries = ['1', '2', '3']
const res = galleries.map((gallery) => {
  const p = path.join(process.cwd(), 'assets', gallery)
  const files = fs.readdirSync(p)
  return {
    gallery,
    files
  }
})

fs.writeFileSync('galleryConfig.json', JSON.stringify(res))
