class ParkingLot {
  constructor() {
    this.floors = {}; 
  }

  addFloor(floorNumber, totalSlots) {
    this.floors[floorNumber] = { totalSlots, all: totalSlots, disabled: 0, twoWheelers: 0 };
  }

  TotalSlots() {
    let total = 0;
    for (const floorNumber in this.floors) {
      total += this.floors[floorNumber].totalSlots;
    }
    console.log("Total Slots:", total);
  }

  AvailableSlots() {
    const availableSlots = { all: 0, disabled: 0, twoWheelers: 0 };
    for (const floorNumber in this.floors) {
      const floor = this.floors[floorNumber];
      availableSlots.all += floor.all;
      availableSlots.disabled += floor.disabled;
      availableSlots.twoWheelers += floor.twoWheelers;
    }
    console.log("Available Slots:", availableSlots);
  }

  FloorSlots(floorNumber) {
    const floor = this.floors[floorNumber];
    console.log(`Floor ${floorNumber} Slots:`, floor || null);
  }

  Park(floorNumber, category) {
    const floor = this.floors[floorNumber];
    if (floor && floor[category] > 0) {
      floor[category]--;
      console.log(`Occupied parking lot on floor ${floorNumber} in category ${category}`);
    } else {
      console.log(`No available parking lot on floor ${floorNumber} in category ${category}`);
    }
  }

  leave(floorNumber, category) {
    const floor = this.floors[floorNumber];
    if (floor && floor[category] < floor.totalSlots) {
      floor[category]++;
      console.log(`Left parking lot on floor ${floorNumber} in category ${category}`);
    } else {
      console.log(`No parking lot to leave on floor ${floorNumber} in category ${category}`);
    }
  }
}

const parkingLot = new ParkingLot();
parkingLot.addFloor(0, 10);
parkingLot.addFloor(1, 15);

parkingLot.TotalSlots();
parkingLot.AvailableSlots();
parkingLot.FloorSlots(0);
parkingLot.FloorSlots(1);

parkingLot.Park(1, "all");
parkingLot.Park(0, "disabled");
parkingLot.leave(0, "all");
parkingLot.AvailableSlots(); 
