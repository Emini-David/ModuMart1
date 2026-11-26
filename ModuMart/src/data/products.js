import laptop from '../assets/Lap.png';
import keyboard from '../assets/keyboard1.png';
import mouse from '../assets/mouse.jpeg';
import slimKeyboard from '../assets/flat_key.jpeg';
import ssd from '../assets/ssd.jpeg';
import usbHub from '../assets/USB-C.jpeg';
import flashDrive from '../assets/drive.jpeg';
import headset from '../assets/headset.jpeg';
import webcam from '../assets/headset.png';
import speakers from '../assets/speaker.jpeg';
import charger from '../assets/charger.png';
import powerBank from '../assets/powerbank.jpg';
import wristRest from '../assets/foam.jpg';
import deskMat from '../assets/mat.jpg';
import cables from '../assets/cable.jpg';
import deskLight from '../assets/light.jpg';
import monitor from '../assets/Lap.png';
import lenovoLaptop from '../assets/lenovo-laptop.svg';

export const categories = [
  'All products',
  'Systems',
  'Monitors & Display',
  'Components',
  'Keyboards & Mice',
  'Audio & Video',
  'Storage',
  'Power Protection',
  'Networking',
  'Cables & Adapters',
  'Desk Setup',
  'Printing',
];

export const products = [
  { id: 1, name: 'Everyday Work Laptop', category: 'Systems', description: 'A dependable everyday computer for study, office work, and browsing.', price: 685000, image: laptop, badge: 'Popular', brand: 'HP'
  },

  { id: 2, name: 'Compact Desktop System', category: 'Systems', description: 'A flexible desktop foundation for a home office or business workspace.', price: 795000, image: laptop, badge: 'New', brand: 'Dell'
  },

  { id: 3, name: 'Performance Laptop', category: 'Systems', description: 'Extra power for creative work, multitasking, and demanding applications.', price: 1150000, image: lenovoLaptop, wasPrice: 1250000, brand: 'Lenovo'
  },

  { id: 4, name: 'Mini PC Workstation', category: 'Systems', description: 'A space-saving computer for a tidy desk and everyday productivity.', price: 545000, image: laptop, brand: 'Intel'
  },

  { id: 5, name: '24-inch Full HD Monitor', category: 'Monitors & Display', description: 'A crisp, comfortable display for home, school, and office setups.', price: 235000, image: monitor, badge: 'Popular', brand: 'HP'
},

  { id: 6, name: '27-inch QHD Monitor', category: 'Monitors & Display', description: 'Extra screen space and fine detail for focused work and entertainment.', price: 385000, image: monitor, brand: 'Dell'
  },

  { id: 7, name: 'USB-C Display Adapter', category: 'Monitors & Display', description: 'Connect a modern laptop to an HDMI display or projector.', price: 18500, image: usbHub, brand: 'UGREEN'
  },

  { id: 9, name: '1TB NVMe Solid State Drive', category: 'Components', description: 'Fast internal storage for compatible laptops and desktop systems.', price: 128000, image: ssd, brand: 'Kingston'
  },

  { id: 10, name: 'Mechanical Gaming Keyboard', category: 'Keyboards & Mice', description: 'Tactile mechanical keys and a sturdy build for work or play.', price: 59500, image: keyboard, badge: 'Bestseller', wasPrice: 69000, brand: 'Redragon'
  },

  { id: 11, name: 'Wireless Precision Mouse', category: 'Keyboards & Mice', description: 'Comfortable wireless control with adjustable pointer speed.', price: 24500, image: mouse, brand: 'Logitech'
  },

  { id: 12, name: 'Slim Wireless Keyboard', category: 'Keyboards & Mice', description: 'A quiet, low-profile keyboard for a neat and comfortable desk.', price: 32500, image: slimKeyboard, brand: 'Logitech'
  },

  { id: 13, name: 'Ergonomic Wired Mouse', category: 'Keyboards & Mice', description: 'A reliable everyday mouse with a comfortable shape and easy setup.', price: 12500, image: mouse, brand: 'HP'
  },

  { id: 14, name: 'Over-Ear Stereo Headset', category: 'Audio & Video', description: 'Comfortable headphones with a clear microphone for calls and gaming.', price: 39500, image: headset, badge: 'Popular', brand: 'JBL'
  },

  { id: 15, name: 'USB HD Webcam', category: 'Audio & Video', description: 'A simple plug-in camera for video meetings and online classes.', price: 48500, image: webcam, brand: 'Logitech'
  },

  { id: 16, name: 'Compact Desktop Speakers', category: 'Audio & Video', description: 'Clear stereo sound in a compact pair that fits beside your monitor.', price: 35000, image: speakers, brand: 'JBL'
  },

  { id: 17, name: 'USB Microphone', category: 'Audio & Video', description: 'A desktop microphone for clearer calls, lessons, and recordings.', price: 42500, image: headset, brand: 'Redragon'
  },

  { id: 18, name: 'Portable SSD · 1TB', category: 'Storage', description: 'Portable storage for quick transfers, backups, and work on the move.', price: 145000, image: ssd, badge: 'Deal', wasPrice: 160000, brand: 'Kingston'
  },

  { id: 19, name: 'USB Flash Drive · 64GB', category: 'Storage', description: 'A handy drive for documents, photos, and everyday file transfers.', price: 12500, image: flashDrive, brand: 'SanDisk'
  },

  { id: 20, name: 'External Hard Drive · 2TB', category: 'Storage', description: 'Room for large files, project archives, and personal backups.', price: 118000, image: flashDrive, brand: 'Seagate'
  },

  { id: 21, name: '1,000VA Line-Interactive UPS', category: 'Power Protection', description: 'Short-term backup power and surge protection for a computer setup.', price: 128000, image: powerBank, badge: 'Deal', wasPrice: 145000, brand: 'APC'
  },

  { id: 22, name: 'Universal Laptop Charger', category: 'Power Protection', description: 'A replacement power adapter for compatible laptops and notebooks.', price: 28500, image: charger, brand: 'HP'
  },

  { id: 23, name: 'Compact 10,000mAh Power Bank', category: 'Power Protection', description: 'Portable backup power for phones, earbuds, and small devices.', price: 35000, image: powerBank, brand: 'Anker'
  },

  { id: 24, name: 'Dual-Band Wi-Fi Router', category: 'Networking', description: 'Reliable wireless coverage for home offices and everyday browsing.', price: 68500, image: usbHub, brand: 'TP-Link'
  },

  { id: 25, name: 'USB Wi-Fi Adapter', category: 'Networking', description: 'Add wireless connectivity to a compatible desktop computer.', price: 17500, image: usbHub, brand: 'TP-Link'
  },

  { id: 26, name: 'USB-C Multiport Dock', category: 'Cables & Adapters', description: 'Add display, USB, and card reader connections to a USB-C laptop.', price: 42500, image: usbHub, badge: 'Popular', brand: 'UGREEN'
  },

  { id: 27, name: 'HDMI Cable · 2 metres', category: 'Cables & Adapters', description: 'Connect a computer, console, or media player to a display.', price: 8500, image: cables, brand: 'UGREEN'
  },

  { id: 28, name: 'Cable and Adapter Kit', category: 'Cables & Adapters', description: 'Useful everyday connections for charging and linking your devices.', price: 18500, image: cables, brand: 'Anker'
  },

  { id: 29, name: 'Memory Foam Wrist Rest', category: 'Desk Setup', description: 'Soft wrist support for long typing sessions at your desk.', price: 18500, image: wristRest, brand: 'Logitech'
  },

  { id: 30, name: 'Extended Desk Mat', category: 'Desk Setup', description: 'A smooth, stable surface for your keyboard, mouse, and notes.', price: 22500, image: deskMat, brand: 'Redragon'
  },

  { id: 31, name: 'LED Monitor Light Bar', category: 'Desk Setup', description: 'A compact light to brighten your workspace without taking desk space.', price: 38500, image: deskLight, brand: 'Baseus'
  },

  { id: 32, name: 'All-in-One Printer', category: 'Printing', description: 'A home and office printer for everyday documents and scanning.', price: 185000, image: monitor, brand: 'HP'
  },

  { id: 33, name: 'USB Document Scanner', category: 'Printing', description: 'Digitise paperwork and images with a compact desktop scanner.', price: 165000, image: monitor, brand: 'Canon'
  },

  { id: 34, name: 'Desktop Processor · Core i5', category: 'Components', description: 'A mid-range desktop processor for a balanced home or office build.', price: 245000, image: ssd, brand: 'Intel'
  },

  { id: 35, name: 'Micro-ATX Motherboard', category: 'Components', description: 'A compact system board for compatible desktop processors and memory.', price: 185000, image: usbHub, brand: 'ASUS'
  },

  { id: 36, name: '550W Desktop Power Supply', category: 'Components', description: 'A reliable power supply for compatible desktop computer builds.', price: 98500, image: charger, brand: 'Corsair'
  },

  { id: 37, name: 'Graphics Card · 8GB', category: 'Components', description: 'Dedicated graphics for creative applications and modern games.', price: 485000, image: laptop, brand: 'MSI'
  },

  { id: 38, name: 'Mid-Tower PC Case', category: 'Components', description: 'A roomy desktop case with space for standard components and cooling.', price: 145000, image: laptop, brand: 'Corsair'
  },

  { id: 39, name: 'Desktop CPU Cooler', category: 'Components', description: 'A quiet air cooler for compatible desktop processor sockets.', price: 68500, image: speakers, brand: 'Cooler Master'
  },

  { id: 40, name: '16GB DDR4 Memory Kit', category: 'Components', description: 'A matched memory kit for compatible desktop system upgrades.', price: 78500, image: ssd, brand: 'Kingston'
  },

  { id: 41, name: 'MacBook Pro 14-inch', category: 'Systems', description: 'A premium MacBook system for demanding creative and professional workflows.', price: 2850000, image: laptop, badge: 'New', brand: 'MacBook'
  },
];

export const formatPrice = (price) => new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 0,
}).format(price);
