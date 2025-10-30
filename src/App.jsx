import TopNav from './components/TopNav';
import QuoteSummary from './components/QuoteSummary';
import LocationsSection, { demoIcons } from './components/LocationsSection';
import BottomBar from './components/BottomBar';

function App() {
  // Demo data to showcase the UI
  const summary = {
    nickname: 'Q4 Fiber Rollout - West Region',
    id: 'Q-CHZ-2025-00421',
    validUntil: '31 Dec 2025',
    status: 'Active', // Active | Pending | Expired
    createdBy: 'Jordan Patel',
    totalLocations: '3 / 100',
    totals: { mrc: 1250 * 3, nrc: 3500 * 3 },
  };

  const locations = [
    {
      id: 'loc-1',
      index: 1,
      name: 'Downtown Office',
      address: '101 Market Street, Suite 500, San Francisco, CA 94105',
      mrc: 1250,
      nrc: 3500,
      services: [
        { icon: demoIcons.network, title: 'Dynamic Business Internet – Gig', detail: 'Up to 1000 Mbps symmetric, enterprise SLA' },
        { icon: demoIcons.server, title: 'Static IP Block – 5', detail: '5 usable IPs, /29 subnet' },
        { icon: demoIcons.wifi, title: 'Whole Business WiFi', detail: 'WiFi 6 access points, cloud-managed' },
        { icon: demoIcons.wrench, title: 'Professional Install', detail: 'On-site installation and testing' },
      ],
    },
    {
      id: 'loc-2',
      index: 2,
      name: 'Warehouse North',
      address: '220 Industrial Way, Oakland, CA 94607',
      mrc: 980,
      nrc: 2200,
      services: [
        { icon: demoIcons.network, title: 'Dynamic Business Internet – 500', detail: 'Up to 500 Mbps symmetric' },
        { icon: demoIcons.wifi, title: 'Whole Business WiFi', detail: 'WiFi 6 access points, cloud-managed' },
      ],
    },
    {
      id: 'loc-3',
      index: 3,
      name: 'R&D Campus',
      address: '700 Innovation Dr, San Jose, CA 95134',
      mrc: 1420,
      nrc: 4100,
      services: [
        { icon: demoIcons.network, title: 'Dynamic Business Internet – Gig', detail: 'Up to 1000 Mbps symmetric, enterprise SLA' },
        { icon: demoIcons.server, title: 'Static IP Block – 5', detail: '5 usable IPs, /29 subnet' },
        { icon: demoIcons.wrench, title: 'Professional Install', detail: 'On-site installation and testing' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopNav />

      <main className="pt-20 pb-32 bg-gradient-to-b from-white via-[#F8F9FB] to-white">
        <QuoteSummary summary={summary} />
        <LocationsSection locations={locations} showAggregate={locations.length > 1} />
      </main>

      <BottomBar />
    </div>
  );
}

export default App;
