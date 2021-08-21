export default class Process {
  constructor() {
    this.processInfo = {
      pId: Math.random(),
      pName: "Files",
      user: "AlexJuca",
      executionTime: window.setInterval(() => {
        var counter = 0
        counter += 1
        return counter
      }, 1000),
    }
  }

  async run(application, task) {
    console.log("sleeping for two seconds")
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds))
    }

    sleep(2000).then(() => {
      console.log("Done sleeping")
    })
    this.processInfo.pName = application
    return task
  }
}
