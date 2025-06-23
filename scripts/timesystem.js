export class TimeSystem {
    constructor() {
        this.totalMinutes = 0;
    }
    get phase() {
        const minutesToday = this.totalMinutes % 1440;
        const hour = Math.floor(minutesToday /60);
        if (hour >=6 && hour < 12) return "Morning";
        if (hour >= 12 && hour < 18) return "Afternoon";
        if (hour >=18 && hour <22) return "Evening";
        return "Night";
    }
    get time() {
        const total = this.totalMinutes % (24 * 60);
        const hours = Math.floor(total / 60);
        const minutes = total % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
    get day() {
        return Math.floor(this. totalMinutes / (24 * 60) + 1);
    }
    get fullTime() {
        return `Day ${this.day}, ${this.time}`;
    }
    advance(minutes) {
        this.totalMinutes += minutes;
    }
}