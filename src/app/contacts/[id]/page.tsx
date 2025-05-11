import Link from 'next/link';

// TODO: Replace with actual API call
async function getContact(id: string) {
  // This is a mock implementation
  return {
    id,
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    createdAt: new Date(),
  };
}

// TODO: Replace with actual API call
async function getConversations(contactId: string) {
  // This is a mock implementation
  return [
    {
      id: '1',
      messages: [
        {
          id: '1',
          content: 'Hello, how can I help you?',
          sender: 'BOT',
          createdAt: new Date(),
        },
        {
          id: '2',
          content: 'I have a question about your services.',
          sender: 'USER',
          createdAt: new Date(),
        },
      ],
    },
  ];
}

export default async function ContactDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const contact = await getContact(params.id);
  const conversations = await getConversations(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Contact Details</h1>
          <Link
            href="/contacts"
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back to Contacts
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{contact.fullName}</h2>
          <div className="space-y-2">
            {contact.email && (
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {contact.email}
              </p>
            )}
            {contact.phone && (
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> {contact.phone}
              </p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Conversations</h3>
          </div>
          <div className="divide-y">
            {conversations.map((conversation) => (
              <Link
                key={conversation.id}
                href={`/conversations/${conversation.id}`}
                className="block p-6 hover:bg-gray-50"
              >
                <div className="space-y-2">
                  {conversation.messages.slice(-2).map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'USER' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.sender === 'USER'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs mt-1 opacity-75">
                          {new Date(message.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 