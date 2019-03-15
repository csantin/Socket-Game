

setInterval(() => null, 1000)

process.on("exit", () => {
  console.log(`process uptime on exit: ${process.uptime()}`)
})

process.on("SIGINT", () => {
  console.log(`process uptime on signal interupt ${process.uptime()}`)
  process.exit()
})