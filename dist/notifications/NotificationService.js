import { UserClass } from '../models/UserClass.js';
import { UserRole } from '../security/UserRole.js';
// Class with fake users
const allUsers = [
    new UserClass(1, "admin@email.com", UserRole.ADMIN),
    new UserClass(2, "manager@email.com", UserRole.MANAGER),
    new UserClass(3, "member@email.com", UserRole.MEMBER),
    new UserClass(4, "viewer@email.com", UserRole.VIEWER)
];
export class NotificationService {
    notifyUser(userId, message) {
        console.log(`Notification for ${userId}: ${message}`);
    }
    notifyGroup(userIds, message) {
        userIds.forEach(id => this.notifyUser(id, message));
    }
    notifyAdmins(message) {
        const admins = allUsers.filter(user => user.getRole() === UserRole.ADMIN);
        admins.forEach(admin => this.notifyUser(admin.getId(), message));
    }
}
