export default class TimeHelper {
  static getCurrentTime() {
    return new Date(Date.now()).toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
    })
  }

  static formatTime(dateStr) {
    return new Date(dateStr.replace(/-/g, "/")).toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
    })
  }
}
