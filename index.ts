import express from 'express'
import multer from 'multer'
import { storage } from './multerConfig'

const PORT = 3000
const BASE_URL = `http://localhost:${PORT}`

const upload = multer({ storage: storage })
const app = express()

app.use('/public', express.static('uploads'))
app.post('/upload', upload.single('file'), (req, res) => {
  return res.json(`${BASE_URL}/public/${req.file?.filename}`)
})

app.listen(PORT, () => {
  console.log(`Server running at: ${BASE_URL}`);
})