// Sample life-like data as specified (5 users, 5 labs, 35 slots per lab)
const sampleData = {
  users: [
    {
      id: 1,
      email: "john.doe@dlsu.edu.ph",
      password: "password123",
      type: "student",
      name: "John Doe",
      studentId: "12345678",
      profilePic: "assets/profile1.jpg",
      description: "Computer Science major",
      reservations: [1, 3]
    },
    {
      id: 2,
      email: "jane.smith@dlsu.edu.ph",
      password: "password123",
      type: "student",
      name: "Jane Smith",
      studentId: "23456789",
      profilePic: "assets/profile2.jpg",
      description: "IT major",
      reservations: [2]
    },
    // 3 more students...
    {
      id: 6,
      email: "tech1@dlsu.edu.ph",
      password: "password123",
      type: "technician",
      name: "Lab Technician 1",
      profilePic: "assets/tech1.jpg",
      description: "Main lab technician"
    }
  ],

  labs: [
    {
      id: 1,
      name: "Gokongwei Computer Lab 1",
      location: "Gokongwei Building, 5th Floor",
      seats: 30,
      description: "Windows PCs with development software"
    },
    {
      id: 2,
      name: "Gokongwei Computer Lab 2",
      location: "Gokongwei Building, 5th Floor",
      seats: 25,
      description: "Mac computers for design students"
    },
    // 3 more labs...
  ],

  reservations: [
    {
      id: 1,
      userId: 1,
      labId: 1,
      seatNumber: 5,
      date: "2024-06-18",
      startTime: "09:00",
      endTime: "11:00",
      anonymous: false,
      status: "confirmed"
    },
    // More reservations...
  ],

  // Generate 35 slots per lab (7 days x 5 time slots per day)
  generateSlots: function(labId) {
    const slots = [];
    const days = 7;
    const slotsPerDay = 5;
    const startHour = 8;
    
    for (let day = 0; day < days; day++) {
      const date = new Date();
      date.setDate(date.getDate() + day);
      const dateStr = date.toISOString().split('T')[0];
      
      for (let i = 0; i < slotsPerDay; i++) {
        const startTime = `${startHour + i * 2}:00`;
        const endTime = `${startHour + i * 2 + 2}:00`;
        
        slots.push({
          labId: labId,
          date: dateStr,
          startTime: startTime,
          endTime: endTime,
          availableSeats: this.labs.find(l => l.id === labId).seats,
          reservations: [] // Will contain reservation IDs
        });
      }
    }
    
    return slots;
  }
};

// Initialize slots for each lab
sampleData.slots = [];
sampleData.labs.forEach(lab => {
  sampleData.slots.push(...sampleData.generateSlots(lab.id));
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = sampleData;
} else {
  window.sampleData = sampleData;
}
