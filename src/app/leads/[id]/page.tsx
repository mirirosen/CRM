import { LeadStatus } from '@/types/prisma';
import StatusBadge from '@/components/StatusBadge';
import Link from 'next/link';

// TODO: Replace with actual API call
async function getLead(id: string) {
  // This is a mock implementation
  return {
    id,
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    status: LeadStatus.NEW,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export default async function LeadDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const lead = await getLead(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Lead Details</h1>
          <Link
            href="/leads"
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back to Leads
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{lead.fullName}</h2>
              <div className="mt-2 space-y-2">
                {lead.email && (
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> {lead.email}
                  </p>
                )}
                {lead.phone && (
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> {lead.phone}
                  </p>
                )}
              </div>
            </div>
            <StatusBadge status={lead.status} />
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center">
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={lead.status}
                >
                  {Object.values(LeadStatus).map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Convert to Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 