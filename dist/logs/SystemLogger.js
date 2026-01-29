export class SystemLogger {
    // Adds message to log
    static log(message) {
        const timestamp = new Date().toISOString();
        SystemLogger.logs.push(`[${timestamp}] ${message}`);
    }
    // Return messages from Logs
    static getLogs() {
        return [...SystemLogger.logs];
    }
    // Clear all logs
    static clear() {
        SystemLogger.logs = [];
    }
}
SystemLogger.logs = [];
