export default class TimeHelper {
  static getCurrentTime() {
    return new Date(Date.now()).toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
    })
  }

  // Formats a date in the YYYY-MM-DD HH:MM format to HH:MM format
  static formatTime(dateStr) {
    return new Date(dateStr.replace(/-/g, "/")).toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
    })
  }

  static getCurrentUTCDate() {
    return new Date(Date.now()).toDateString()
  }
}
