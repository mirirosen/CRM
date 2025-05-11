import { Contact } from '@/types/prisma';
import Link from 'next/link';

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <Link href={`/contacts/${contact.id}`}>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold text-gray-900">{contact.fullName}</h3>
        <div className="mt-2 space-y-1">
          {contact.email && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> {contact.email}
            </p>
          )}
          {contact.phone && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Phone:</span> {contact.phone}
            </p>
          )}
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Created {new Date(contact.createdAt).toLocaleDateString()}
        </div>
      </div>
    </Link>
  );
} 