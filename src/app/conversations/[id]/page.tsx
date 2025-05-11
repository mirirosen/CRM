import Link from 'next/link';

// TODO: Replace with actual API call
async function getConversation(id: string) {
  // This is a mock implementation
  return {
    id,
    messages: [
      {
        id: '1',
        content: 'Hello, how can I help you?',
        sender: 'BOT',
        createdAt: new Date(Date.now() - 3600000),
      },
      {
        id: '2',
        content: 'I have a question about your services.',
        sender: 'USER',
        createdAt: new Date(Date.now() - 3500000),
      },
      {
        id: '3',
        content: 'Of course! What would you like to know?',
        sender: 'BOT',
        createdAt: new Date(Date.now() - 3400000),
      },
    ],
  };
}

export default async function ConversationPage({
  params,
}: {
  params: { id: string };
}) {
  const conversation = await getConversation(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Conversation</h1>
          <Link
            href="/contacts"
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back to Contacts
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {conversation.messages.map((message) => (
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

            <div className="border-t p-4">
              <form className="flex gap-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 