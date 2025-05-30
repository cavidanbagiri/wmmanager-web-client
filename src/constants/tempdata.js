const tempdata = [
  {
    "material_name": "Steel Pipe",
    "quantity": 120,
    "unit": "pcs",
    "ordered_by": "john_doe",
    "group_name": "Metal"
  },
  {
    "material_name": "Aluminum Sheet",
    "quantity": 85,
    "unit": "sheets",
    "ordered_by": null,
    "group_name": "Metal"
  },
  {
    "material_name": "Copper Wire",
    "quantity": 300,
    "unit": "meters",
    "ordered_by": "jane_smith",
    "group_name": "Electrical"
  },
  {
    "material_name": "Wood Plank",
    "quantity": 200,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Wood"
  },
  {
    "material_name": "Nails",
    "quantity": 1000,
    "unit": "pcs",
    "ordered_by": "bob_builder",
    "group_name": "Fasteners"
  },
  {
    "material_name": "Screws",
    "quantity": 1500,
    "unit": "pcs",
    "ordered_by": "john_doe",
    "group_name": "Fasteners"
  },
  {
    "material_name": "Paint - Red",
    "quantity": 45,
    "unit": "liters",
    "ordered_by": "alice_codes",
    "group_name": "Chemicals"
  },
  {
    "material_name": "Paint - Blue",
    "quantity": 30,
    "unit": "liters",
    "ordered_by": null,
    "group_name": "Chemicals"
  },
  {
    "material_name": "Plastic Tube",
    "quantity": 75,
    "unit": "pcs",
    "ordered_by": "charlie_dev",
    "group_name": "Plastics"
  },
  {
    "material_name": "Rubber Seal",
    "quantity": 200,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Seals"
  },
  {
    "material_name": "Glass Panel",
    "quantity": 30,
    "unit": "panels",
    "ordered_by": "dana_admin",
    "group_name": "Glass"
  },
  {
    "material_name": "Ceramic Tile",
    "quantity": 500,
    "unit": "tiles",
    "ordered_by": "bob_builder",
    "group_name": "Tiles"
  },
  {
    "material_name": "Brick",
    "quantity": 10000,
    "unit": "pcs",
    "ordered_by": "john_doe",
    "group_name": "Construction"
  },
  {
    "material_name": "Cement Bag",
    "quantity": 200,
    "unit": "bags",
    "ordered_by": null,
    "group_name": "Construction"
  },
  {
    "material_name": "Sand",
    "quantity": 5000,
    "unit": "kg",
    "ordered_by": "alice_codes",
    "group_name": "Construction"
  },
  {
    "material_name": "Gravel",
    "quantity": 6000,
    "unit": "kg",
    "ordered_by": null,
    "group_name": "Construction"
  },
  {
    "material_name": "LED Bulb",
    "quantity": 300,
    "unit": "pcs",
    "ordered_by": "charlie_dev",
    "group_name": "Electrical"
  },
  {
    "material_name": "Extension Cord",
    "quantity": 80,
    "unit": "pcs",
    "ordered_by": "john_doe",
    "group_name": "Electrical"
  },
  {
    "material_name": "Switch",
    "quantity": 150,
    "unit": "pcs",
    "ordered_by": "dana_admin",
    "group_name": "Electrical"
  },
  {
    "material_name": "Socket Outlet",
    "quantity": 120,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Electrical"
  },
  {
    "material_name": "PVC Pipe",
    "quantity": 250,
    "unit": "meters",
    "ordered_by": "bob_builder",
    "group_name": "Plumbing"
  },
  {
    "material_name": "Valve",
    "quantity": 90,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Plumbing"
  },
  {
    "material_name": "Water Pump",
    "quantity": 25,
    "unit": "pcs",
    "ordered_by": "john_doe",
    "group_name": "Plumbing"
  },
  {
    "material_name": "Iron Rod",
    "quantity": 500,
    "unit": "pcs",
    "ordered_by": "alice_codes",
    "group_name": "Metal"
  },
  {
    "material_name": "Stainless Steel Sheet",
    "quantity": 60,
    "unit": "sheets",
    "ordered_by": null,
    "group_name": "Metal"
  },
  {
    "material_name": "Battery",
    "quantity": 120,
    "unit": "pcs",
    "ordered_by": "charlie_dev",
    "group_name": "Electrical"
  },
  {
    "material_name": "Wire Stripper",
    "quantity": 15,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Tools"
  },
  {
    "material_name": "Drill Bit",
    "quantity": 100,
    "unit": "pcs",
    "ordered_by": "john_doe",
    "group_name": "Tools"
  },
  {
    "material_name": "Hammer",
    "quantity": 40,
    "unit": "pcs",
    "ordered_by": "bob_builder",
    "group_name": "Tools"
  },
  {
    "material_name": "Wrench",
    "quantity": 60,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Tools"
  },
  {
    "material_name": "Glue",
    "quantity": 200,
    "unit": "bottles",
    "ordered_by": "dana_admin",
    "group_name": "Chemicals"
  },
  {
    "material_name": "Adhesive Tape",
    "quantity": 150,
    "unit": "rolls",
    "ordered_by": "alice_codes",
    "group_name": "Chemicals"
  },
  {
    "material_name": "Foam Insulation",
    "quantity": 90,
    "unit": "sheets",
    "ordered_by": null,
    "group_name": "Insulation"
  },
  {
    "material_name": "Fiberglass Insulation",
    "quantity": 70,
    "unit": "rolls",
    "ordered_by": "john_doe",
    "group_name": "Insulation"
  },
  {
    "material_name": "Thermal Paste",
    "quantity": 200,
    "unit": "tubes",
    "ordered_by": "charlie_dev",
    "group_name": "Electronics"
  },
  {
    "material_name": "Heat Sink",
    "quantity": 120,
    "unit": "pcs",
    "ordered_by": "john_doe",
    "group_name": "Electronics"
  },
  {
    "material_name": "Fan",
    "quantity": 80,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Electronics"
  },
  {
    "material_name": "Router",
    "quantity": 30,
    "unit": "pcs",
    "ordered_by": "bob_builder",
    "group_name": "Networking"
  },
  {
    "material_name": "Ethernet Cable",
    "quantity": 500,
    "unit": "meters",
    "ordered_by": "dana_admin",
    "group_name": "Networking"
  },
  {
    "material_name": "Switch Hub",
    "quantity": 20,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Networking"
  },
  {
    "material_name": "Fire Extinguisher",
    "quantity": 25,
    "unit": "pcs",
    "ordered_by": "john_doe",
    "group_name": "Safety"
  },
  {
    "material_name": "First Aid Kit",
    "quantity": 50,
    "unit": "kits",
    "ordered_by": "alice_codes",
    "group_name": "Safety"
  },
  {
    "material_name": "Safety Goggles",
    "quantity": 100,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Safety"
  },
  {
    "material_name": "Gloves",
    "quantity": 200,
    "unit": "pairs",
    "ordered_by": "charlie_dev",
    "group_name": "Safety"
  },
  {
    "material_name": "Hard Hat",
    "quantity": 150,
    "unit": "pcs",
    "ordered_by": "bob_builder",
    "group_name": "Safety"
  },
  {
    "material_name": "Ladder",
    "quantity": 30,
    "unit": "pcs",
    "ordered_by": "dana_admin",
    "group_name": "Tools"
  },
  {
    "material_name": "Measuring Tape",
    "quantity": 70,
    "unit": "pcs",
    "ordered_by": null,
    "group_name": "Tools"
  }
]
export default tempdata