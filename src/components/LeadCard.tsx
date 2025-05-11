import { Lead } from '@/types/prisma';
import Link from 'next/link';
import StatusBadge from './StatusBadge';

interface LeadCardProps {
  lead: Lead;
}

export default function LeadCard({ lead }: LeadCardProps) {
  return (
    <Link href={`/leads/${lead.id}`}>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{lead.fullName}</h3>
            <div className="mt-1 space-y-1">
              {lead.email && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span> {lead.email}
                </p>
              )}
              {lead.phone && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> {lead.phone}
                </p>
              )}
            </div>
          </div>
          <StatusBadge status={lead.status} />
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Created {new Date(lead.createdAt).toLocaleDateString()}
        </div>
      </div>
    </Link>
  );
} 