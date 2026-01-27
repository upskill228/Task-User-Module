export class HistoryLog {
    constructor() {
        this.logs = [];
    }
    // Adds new message to Log
    addLog(message) {
        this.logs.push(message);
    }
    // Shows all messages
    getLogs() {
        return this.logs;
    }
    // Clear all messsages
    clearLogs() {
        this.logs = [];
    }
}
