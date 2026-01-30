import { SystemConfig } from "./services/SystemConfig.js";
import { IdGenerator } from "./utils/IdGenerator.js";
import { SystemLogger } from "./logs/SystemLogger.js";
import { GlobalValidators } from "./utils/GlobalValidators.js";
import { BusinessRules } from "./services/BusinessRules.js";
SystemConfig.setEnvironment("development");
SystemLogger.log("Sistema configurado");
console.log(SystemConfig.getInfo());
const userId = IdGenerator.generate();
const taskId = IdGenerator.generate();
SystemLogger.log(`User criado com ID: ${userId}`);
SystemLogger.log(`Task criada com ID: ${taskId}`);
const email = "user@email.com";
if (!GlobalValidators.isValidEmail(email)) {
    SystemLogger.log("Email inválido");
    throw new Error("Email inválido");
}
SystemLogger.log("Email válido");
const taskCompleted = false;
const canComplete = BusinessRules.canTaskBeCompleted(taskCompleted);
if (canComplete) {
    SystemLogger.log("Task pode ser concluída");
}
else {
    SystemLogger.log("Task NÃO pode ser concluída");
}
console.log("LOGS DO SISTEMA:");
console.log(SystemLogger.getLogs());
