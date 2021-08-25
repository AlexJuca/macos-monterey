export default class TimeHelper {
  static getCurrentTime() {
    return new Date(Date.now()).toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
    })
  }
}
