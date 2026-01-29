export class SystemLogger {
    private static logs: string[] = [];

    // Adds message to log
    static log(message: string): void {
        const timestamp = new Date().toISOString();
        SystemLogger.logs.push(`[${timestamp}] ${message}`);
    }

    // Return messages from Logs
    static getLogs(): string[] {
        return [...SystemLogger.logs];
    }

    // Clear all logs
    static clear(): void {
        SystemLogger.logs = [];
    }
}
