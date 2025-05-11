import ContactCard from '@/components/ContactCard';
import { Contact } from '@/types/prisma';

// TODO: Replace with actual API call
function getContacts(): Contact[] {
  // This is a mock implementation
  return [
    {
      id: '1',
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}

export default function ContactsPage() {
  const contacts = getContacts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
} 