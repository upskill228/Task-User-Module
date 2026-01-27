export class HistoryLog {

    private logs: string[] = [];

    // Adds new message to Log
    addLog(message: string): void {
        this.logs.push(message);
    }

    // Shows all messages
    getLogs(): string[] {
        return this.logs;
    }

    // Clear all messsages
    clearLogs(): void {
        this.logs = [];
    }
}
