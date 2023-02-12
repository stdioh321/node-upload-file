import express from 'express'
import multer  from 'multer'
import { storage } from './multerConfig'

const PORT = 3000
const BASE_URL = `http://localhost:${PORT}`

const upload = multer({ storage: storage})
const app = express()

app.use('/public', express.static('uploads'))


app.post('/upload', upload.array('file', 2), (req, res) => {

  let theFiles : any = req.files
  theFiles = theFiles?.map((it: any) => {
    return `${BASE_URL}/public/${it.filename}`
  })
  return res.json(theFiles)
})

app.listen(PORT, () => {
  console.log(`Server running at: ${BASE_URL}`);
})