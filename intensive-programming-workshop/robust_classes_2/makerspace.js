const makerspace = {
  weekOf: "2026-02-15",

  membershipTiers: {
    basic: {
      id: "basic",
      maxReservationsPerWeek: 3,
      equipmentAccess: ["3d_printer"],
      requiresCertification: false
    },
    premium: {
      id: "premium",
      maxReservationsPerWeek: 10,
      equipmentAccess: ["3d_printer", "laser_cutter", "soldering_station"],
      requiresCertification: true
    }
  },

  members: {
    m1: {
      id: "m1",
      name: "Jourdan",
      certifications: ["laser_safety"],
      memberships: [
        {
          tierId: "premium",
          startDate: "2026-01-01",
          endDate: "2027-01-01"
        }
      ]
    },
    m1: {
      id: "m2",
      name: "Naomi",
      certifications: ["soldering_station, 3d_printer"],
      memberships: [
        {
          tierId: "premium",
          startDate: "2026-02-6",
          endDate: "2027-02-6"
        }
      ]
    }
    
  },

  resources: {
    spaces: {
      roomA: {
        id: "roomA",
        type: "classroom",
        availability: {
          open: "09:00",
          close: "21:00"
        },
        maintenanceHistory: [
          {
            date: "2026-02-10",
            notes: "Projector replaced"
          }
        ]
      }
    },

    equipment: {
      laser_cutter: {
        id: "laser_cutter",
        requiresCertification: "laser_safety",
        maintenanceHistory: [
          {
            date: "2026-02-01",
            notes: "Lens cleaned"
          }
        ]
      }
    }
  },

  workshops: {
    w1: {
      id: "w1",
      title: "Intro to Laser Cutting",
      spaceId: "roomA",
      requiredEquipment: ["laser_cutter"],
      instructorId: "m1",
      enrolled: ["m2"],
      waitlist: [],
      attendance: ["m2"],
      startTime: "2026-02-17T18:00",
      endTime: "2026-02-17T20:00"
    }
  },

  reservations: {
    r1: {
      id: "r1",
      memberId: "m1",
      resourceType: "equipment",
      resourceId: "laser_cutter",
      startTime: "2026-02-18T10:00",
      endTime: "2026-02-18T11:00",
      status: "completed" // active, cancelled, no_show, conflict
    }
  },

  usageLogs: {
    u1: {
      id: "u1",
      memberId: "m1",
      resourceType: "equipment",
      resourceId: "laser_cutter",
      startTime: "2026-02-18T10:05",
      endTime: "2026-02-18T10:55",
      reservationId: "r1" // may be null if walk-in
    }
  }
};