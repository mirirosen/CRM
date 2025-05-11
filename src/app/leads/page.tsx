import { Lead, LeadStatus } from '@/types/prisma';
import LeadCard from '@/components/LeadCard';
import Link from 'next/link';

// TODO: Replace with actual API call
async function getLeads(): Promise<Lead[]> {
  // This is a mock implementation
  return [
    {
      id: '1',
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      status: LeadStatus.NEW,
      contactId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}

export default async function LeadsPage() {
  const leads = await getLeads();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
        <Link
          href="/leads/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          New Lead
        </Link>
      </div>

      <div className="mb-6">
        <select
          className="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          defaultValue=""
        >
          <option value="">All Statuses</option>
          {Object.values(LeadStatus).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>
    </div>
  );
} 