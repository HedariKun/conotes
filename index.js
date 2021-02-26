const express = require("express")
const process = require("process")

const PORT = process.env.PORT || 3000
const app = express()

app.use("/", express.static("dist"))

app.listen(PORT, function() {
  console.log(`started on port ${PORT}`)
})
